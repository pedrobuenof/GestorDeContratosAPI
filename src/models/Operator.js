const connection_db = require('../../config/database')
const { DataTypes } = require('sequelize');

const Operadora = connection_db.define('Operadora', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'operadoras',
  timestamps: true,
});

module.exports = Operadora;
