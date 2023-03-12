const mongoose = require('mongoose');
const config = require('../config');


const dbSettings = {
  user: config.dbUser,
  pass: config.dbPassword,
  host: config.dbServer,
  dbName: config.dbDatabase,
};

const connectToDatabase = async () => {
  try {
    const mongoUri = `mongodb+srv://${dbSettings.user}:${dbSettings.pass}@${dbSettings.host}/${dbSettings.dbName}?retryWrites=true&w=majority`;
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectToDatabase };
