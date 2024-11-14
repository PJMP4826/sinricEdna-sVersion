const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'byaudjtk1sppria29irs-mysql.services.clever-cloud.com',
    user: 'u5ukffxwfrusudge',
    password: 'l0FgBMs8O6YR23UXCp7e',
    database: 'byaudjtk1sppria29irs'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

module.exports = db;
