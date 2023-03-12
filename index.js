
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
  console.log(result)
  client.sendMessage("5216145994188@c.us", result);
  result = await WorkoutPlan.find({ dateWorkout: { $eq: new Date(new Date().setHours(-6, 0, 0, 0)) } });
  console.log(result)

  client.sendMessage("5216145994188@c.us", result);
}, 30000);

client.initialize()