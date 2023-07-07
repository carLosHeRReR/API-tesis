// db/connection.js
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida con éxito.');
});

module.exports = connection;
