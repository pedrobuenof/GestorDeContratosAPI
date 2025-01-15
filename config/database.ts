import { Sequelize } from "sequelize";
require('dotenv').config();

// Validação das variáveis de ambiente
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

if (!dbName || !dbUser || !dbPassword || !dbHost) {
  throw new Error('Database configuration is missing environment variables.');
}

const connection_db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  timezone: '-03:00',
});

export default connection_db;