const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'blogApp'
});
connection.connect(function(){
    console.log("Database Conectada");
});
module.exports = connection;
