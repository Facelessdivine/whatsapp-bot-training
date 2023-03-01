
const qrcode = require('qrcode-terminal');
const handlebars = require('handlebars');
const { getConnection, sql } = require('./database/connection');
const { querys } = require('./database/querys');
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
  client.sendMessage("5216145994188@c.us", 'hola')
  console.log('Conexion exitosa !');
})
client.on('message', async message => {
  console.log(message.from)
  
  if (message.body === '/workoutplan') {
    const pool = await getConnection();
    const result = pool.request().query(querys.workoutplan)
    const data = {
      diaActual: result.recordsets[0][0]?.DiaActual || '',
      mesActual: result.recordsets[0][0]?.MesActual || '',
      assetism: result.recordsets[1][0]?.assetism_text || '',
      workout: result.recordsets[2][0]?.workout_text || '',
      nutrition: result.recordsets[3][0]?.nutrition_text || '',
      warmup: result.recordsets[4][0]?.warmup_text || '',
      estiramientos: result.recordsets[4][0]?.estiramientos || '',
      planAlimentario: result.recordsets[4][0]?.planAlimentario || '',
      entrenamientoFuerza: result.recordsets[4][0]?.entrenaientoFuerza || '',
      esotericisim: result.recordsets[5][0]?.esotericisim_text || '',
    };
    const compiledTemplate = handlebars.compile(template);

    mensaje = compiledTemplate(data);
    sql.close();
    client.sendMessage(message.from, 'ya funciona el bot >3');
  }
})
client.initialize()