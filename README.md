# Simple REST API - Node.js + MySQL

Projeto de **API REST** desenvolvido com **Node.js e MySQL**, com o objetivo de praticar a criação de um **CRUD básico** para cadastro de pessoas (**nome e CPF**), aplicando boas práticas de organização, separação de responsabilidades e comunicação com banco de dados relacional.

O projeto conta também com um **frontend simples em HTML5, CSS3 e JavaScript**, responsável por consumir a API e permitir a interação do usuário.

---

## 🚀 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MySQL
- Cors

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## 📁 Estrutura do Projeto

simple-rest-api-node/
│
├── index.js
├── package.json
├── README.md
│
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── pessoaController.js
│ └── routes/
│ └── pessoaRoutes.js
│
└── frontend/
├── index.html
├── style.css
└── script.js


---

## ⚙️ Configuração do Banco de Dados

Crie a tabela abaixo no MySQL:

```sql
CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE
);