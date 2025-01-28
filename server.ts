import express from 'express';
import api from './src/routes/api';
import connection_db from './config/database';
import cors from 'cors'


require('dotenv').config();

// BANCO DE DADOS
connection_db.authenticate().then(() => console.log("Conexão com o banco de dados bem-sucedida!")).catch( err => console.error('Erro ao conectar ao banco de dados: ', err));
connection_db.sync({ force: false }) // Não deleta as tabelas existentes
.then(() => {
  console.log('Tabelas sincronizadas com o banco de dados!');
})
.catch(err => {
  console.error('Erro ao sincronizar tabelas: ', err);
});


const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use('/api', api);
  
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});