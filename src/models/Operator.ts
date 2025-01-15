import connection_db from '../../config/database'
import { DataTypes } from 'sequelize';

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

export default Operadora;
