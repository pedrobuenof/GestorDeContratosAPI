const express = require('express');
const api = require('./src/routes/api');
require('dotenv').config();

// BANCO DE DADOS
const connection_db = require('./config/database');
connection_db.authenticate().then(() => console.log("Conexão com o banco de dados bem-sucedida!")).catch( err => console.error('Erro ao conectar ao banco de dados: ', err));
connection_db.sync({ force: false }) // Não deleta as tabelas existentes
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados!');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas: ', err);
  });


const app = express();

// Middlewares
app.use(express.json());
app.use('/api', api);
  
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});