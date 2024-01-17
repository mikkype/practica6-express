const dotenv = require("dotenv");
dotenv.config();
const mysql = require('mysql2');
let connection;
try {
 connection = mysql.createConnection({
 host: process.env.DB_HOST,
 database:process.env.DB_NAME,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 port: process.env.DB_PORT});
 console.log("conectado a bd");
} catch (error) {
 console.log("Error al conectar con la base de datos");
}
module.exports = {connection};
