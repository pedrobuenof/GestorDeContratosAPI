import connection_db from '../../config/database'
import { DataTypes } from 'sequelize';

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

export default Plano;
