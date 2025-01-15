const connection_db = require('../../config/database');
const { DataTypes } = require('sequelize');

connection_db.define()

const Beneficiario = connection_db.define('Benefiario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  contrato_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'beneficiarios',
  timestamps: true
})

module.exports = Beneficiario;