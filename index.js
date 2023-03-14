
const qrcode = require('qrcode-terminal');
const handlebars = require('handlebars');
const moment = require('moment-timezone');
moment.tz.setDefault('America/Chihuahua');
const fs = require('fs');
const { connectToDatabase } = require('./database/connection');
const { WorkoutPlan } = require('./database/models/workoutplan')
const { users } = require('./database/models/users')
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', async () => {
  await connectToDatabase()
  // const res = await users.find().sort({ createdAt: -1 }).limit(1)
  // console.log(res)
  // const from = res[0]?.from || "5216145994188@c.us"
  // const author = res[0]?.author || "Señor"
  client.sendMessage("5216145994188@c.us", 'El bot esta listo para ser probado, Señor ')
  console.log('Conexion exitosa !');
})

client.on('message', async (msg) => {
  if (msg.body.startsWith('/')) {
    const { from } = msg;
    const author = msg?._data?.notifyName || "Usuario sin nombre"
    const command = msg.body.substring(1);
    const parts = command.split(' ');
    const option = parts[0].toLowerCase();
    const date = parts[1];
    const currentDate = moment().format('DD/MM/YYYY');
    const thisMonth = moment().month()
    const mes = thisMonth == 2 ? "Primer mes" : thisMonth == 3 ? "Segundo mes" : thisMonth == 4 ? "Tercer mes" : thisMonth == 5 ? "Cuarto mes" : 'null';
    // console.log(mes)
    const collection = WorkoutPlan
    try {
      const userData = new users({ from, author })
      const hist = await userData.save()
      console.log(`User info saved with id: ${hist.insertedId}`);
    } catch (error) {
      // console.log(error)
    }
    try {
      switch (option) {
        case 'd':
          const docsD = await collection.findOne({ dateWorkout: date });
          const registro = {
            dia: docsD.dia,
            dateWorkout: docsD.dateWorkout,
            workout_text: docsD.workout_text
          }
          const templateD = handlebars.compile(fs.readFileSync('templates/d.hbs', 'utf8'));
          const resD = templateD({ registro, fecha: date });
          client.sendMessage("5216145994188@c.us", resD);
          break;

        case 'w':
          const startOfWeek = moment().startOf('week').format('DD/MM/YYYY');
          const endOfWeek = moment().endOf('week').format('DD/MM/YYYY');
          const docsW = await collection.find({
            dateWorkout: { $gte: startOfWeek, $lte: endOfWeek },
            mes: { $eq: mes } // Agregamos la condición para el mes actual
          })
          const resultW = docsW.map(item => item.toObject());
          const templateW = handlebars.compile(fs.readFileSync('templates/w.hbs', 'utf8'));
          const resW = templateW({ registros: resultW });
          client.sendMessage("5216145994188@c.us", resW);
          break;
        case 'm':
          const docsM = await collection.find({ mes })
          const resultM = docsM.map(item => item.toObject());
          const templateM = handlebars.compile(fs.readFileSync('templates/m.hbs', 'utf8'));
          const resM = templateM({ registros: resultM });
          client.sendMessage("5216145994188@c.us", resM);
          break;

        case 'a':
          const docsA = await collection.find()
          const resultA = docsA.map(item => item.toObject())
          const templateA = handlebars.compile(fs.readFileSync('templates/a.hbs', 'utf8'));
          const resA = templateA({ registros: resultA });
          client.sendMessage("5216145994188@c.us", resA);
          break;

        case 't':
          const docsT = await collection.findOne({ dateWorkout: currentDate });
          const { workout_text, dia } = docsT
          // const resultT = docsT.map(i => i.toObject())
          // console.log(resultT)
          const templateT = handlebars.compile(fs.readFileSync('templates/t.hbs', 'utf8'));
          const resT = templateT({ workout_text, dia });
          client.sendMessage("5216145994188@c.us", resT);
          break;

        default:
          client.sendMessage("5216145994188@c.us", 'Comando no reconocido');
          break;
      }
    } catch (err) {
      console.error(err);
      client.sendMessage("5216145994188@c.us", 'Error al procesar la consulta');
    }
  }
});

// setInterval(async () => {
//   let startOfWeek = new Date();
//   startOfWeek.setHours(-6, 0, 0, 0);
//   startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
//   let endOfWeek = new Date(startOfWeek.getTime());
//   endOfWeek.setDate(endOfWeek.getDate() + 7);
//   let result = await WorkoutPlan.find({
//     dateWorkout: {
//       $gte: startOfWeek,
//       $lte: endOfWeek
//     }
//   });
//   const data = processData(result);
//   const compiledTemplate = handlebars.compile(template);
//   const mensaje = compiledTemplate({ data });
//   client.sendMessage("5216145994188@c.us", mensaje);
//   let result2 = await WorkoutPlan.find({ dateWorkout: { $eq: new Date(new Date().setHours(-6, 0, 0, 0)) } });
//   // console.log('first')
//   // console.log(result2)
//   const data2 = processData(result2);
//   // console.log('second')
//   // console.log(data2)
//   const compiledTemplate2 = handlebars.compile(template2);
//   const mensaje2 = compiledTemplate2({ data2 });
//   client.sendMessage("5216145994188@c.us", mensaje2);
// }, 30000);
// const processData = (data) => {
//   return data.map((item) => {
//     const date = moment(item.dateWorkout+1);
//     console.log(date)
//     console.log(item.dateWorkout)
//     return {
//       day: date.format('DD'),
//       month: date.format('MMM'),
//       weekday: date.format('dddd'),
//       workout_text: item.workout_text,
//     };
//   });
// };

client.initialize()