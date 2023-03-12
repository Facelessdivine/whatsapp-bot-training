
const qrcode = require('qrcode-terminal');
// const handlebars = require('handlebars');
const { connectToDatabase } = require('./database/connection');
const { WorkoutPlan } = require('./database/models/workoutplan')
// const { querys } = require('./database/querys');
// const { template } = require('./database/template');


const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
  authStrategy: new LocalAuth()
});

// let mensaje = '';

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', async () => {
  client.sendMessage("5216145994188@c.us", 'Workout Ready!')
  try {
    await connectToDatabase()
  } catch (error) {
    console.log(error)
  }
  console.log('Conexion exitosa !');
})
client.on('message', async message => {
  // const compiledTemplate = handlebars.compile(template);
  console.log(message.body)
  // if (message.fromMe) {


  // }
  // if (message.fromMe) {
  setInterval(async () => {
    let startOfWeek = new Date();
    startOfWeek.setHours(-6, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    let endOfWeek = new Date(startOfWeek.getTime());
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    let result = await WorkoutPlan.find({
      dateWorkout: {
        $gte: startOfWeek,
        $lte: endOfWeek
      }
    });
    let data = JSON.parse(JSON.stringify(result));
    client.sendMessage("5216145994188@c.us", data);
    result = await WorkoutPlan.find({ dateWorkout: { $eq: new Date(new Date().setHours(-6, 0, 0, 0)) } });
    data = JSON.parse(JSON.stringify(result));
    client.sendMessage(message.from, data);
  }, 30000);

  // }
})

client.initialize()