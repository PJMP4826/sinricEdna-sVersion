const mysql = require('mysql');

const db = mysql.createConnection({
    host: '34.132.242.60',
    user: 'pato',
    password: '256859421',
    database: 'sinric'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

module.exports = db;
