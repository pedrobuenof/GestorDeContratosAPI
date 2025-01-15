const connection_db = require('../../config/database');
const { DataTypes } = require('sequelize');

const Contrato = connection_db.define('Contrato', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  numero_contrato: {
    type: DataTypes.INTEGER,
  },

  status: {
    type: DataTypes.ENUM('Ativo', 'Expirado'),
    allowNull: false,
  },

  data_inicial: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  data_final: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  empresa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  operadora_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  plano_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'contratos',
  timestamps: true
})

module.exports = Contrato;
