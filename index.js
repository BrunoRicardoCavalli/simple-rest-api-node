const express = require('express');
const cors = require('cors');
const db = require('./src/config/db');

const pessoasRoutes = require('./src/routes/pessoaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/pessoas', pessoasRoutes);

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta em http://localhost:${PORT}`);
})