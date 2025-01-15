import connection_db from '../../config/database'
import { DataTypes } from 'sequelize';

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

export default Beneficiario;