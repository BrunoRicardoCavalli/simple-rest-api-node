const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_node'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar :', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;