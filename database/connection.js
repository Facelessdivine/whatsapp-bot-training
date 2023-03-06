const sql = require("mssql");
const config = require("../config");

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log('databse is connected')
    return pool;
  } catch (error) {
    console.error(error);
  }code . 
  
};

module.exports = { sql, getConnection };

