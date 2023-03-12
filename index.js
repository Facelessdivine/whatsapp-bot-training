
const qrcode = require('qrcode-terminal');
const handlebars = require('handlebars');
const { connectToDatabase } = require('./database/connection');
const { WorkoutPlan } = require('./database/models/workoutplan')
// const { querys } = require('./database/querys');
const { template } = require('./database/template');


const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
  authStrategy: new LocalAuth()
});

let mensaje = '';

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
  console.log(message.from)

  if (message.body === '/w') {

    const compiledTemplate = handlebars.compile(template);

    // Se realiza la consulta a MongoDB
    const result = await WorkoutPlan.find({ dateWorkout: { $eq: new Date(new Date().setHours(-6, 0, 0, 0)) } });
    const data = JSON.parse(JSON.stringify(result));

    // Se transforma el resultado a formato JSON para poder usarlo en el template de Handlebars

    mensaje = compiledTemplate(data);

    client.sendMessage(message.from, mensaje);
  }
})

client.initialize()