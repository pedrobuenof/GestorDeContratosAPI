const connection_db = require('../../config/database');
const { DataTypes } = require('sequelize');

const Empresa = connection_db.define('Empresa', {
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
  tableName: 'empresas',
  timestamps: true,
});

module.exports = Empresa;
