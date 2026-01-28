const db = require('../config/db');

exports.findAll = (req, res) => {
    db.query('SELECT * FROM pessoas', (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
};

exports.create = (req, res) => {
    const { nome, cpf } = req.body;

    if (!nome || !cpf) {
        return res.status(400).json({
            error: 'Nome e CPF são obrigatórios'
        });
    }

    const sql = 'INSERT INTO pessoas (nome, cpf) VALUES (?, ?)';

    db.query(sql, [nome, cpf], err => {
        if (err) return res.status(500).json(err);
        return res.status(201).json({
            message: 'Pessoa criada com sucesso'
        });
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { nome, cpf } = req.body;

    const sql = 'UPDATE pessoas SET nome = ?, cpf = ? WHERE id = ?';

    db.query(sql, [nome, cpf, id], err => {
        if (err) return res.status(500).json(err);
        return res.json({
            message: 'Pessoa atualizada com sucesso'
        });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM pessoas WHERE id = ?';

    db.query(sql, [id], err => {
        if (err) return res.status(500).json(err);
        return res.json({
            message: 'Pessoa removida com sucesso'
        });
    });
};
