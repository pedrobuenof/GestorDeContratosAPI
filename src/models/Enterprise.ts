import connection_db from '../../config/database'
import { DataTypes } from 'sequelize';

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

export default Empresa;
