const connection_db = require('../../config/database');
const { DataTypes } = require('sequelize');

connection_db.define()

const Plano = connection_db.define('Plano', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'planos',
  timestamps: true
})

module.exports = Plano;
