const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'R&4vWz9*2tB@7QmX',
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