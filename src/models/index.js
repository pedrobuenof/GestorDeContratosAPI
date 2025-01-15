const Plano = require('./Plan'); // Importa o modelo de Planos
const Contrato = require('./Contract'); // Importa o modelo de Contratos
const Beneficiario= require('./Beneficiary'); // Importa o modelo de Beneficiários
const Empresa = require('./Enterprise');
const Operadora = require('./Operator');

// Define os Relacionamentos 1 para muitos no Sequelize
Contrato.belongsTo(Empresa, { foreignKey: 'empresa_id' });
Empresa.hasMany(Contrato, { foreignKey: 'empresa_id' });

Contrato.belongsTo(Operadora, { foreignKey: 'operadora_id' });
Operadora.hasMany(Contrato, { foreignKey: 'operadora_id' });

Contrato.belongsTo(Plano, { foreignKey: 'plano_id' });
Plano.hasMany(Contrato, { foreignKey: 'plano_id' });

// Relacionamento muitos para muitos entre Contratos e Beneficiários
Contrato.belongsToMany(Beneficiario, { through: 'ContractBeneficiary', foreignKey: 'contrato_id' });
Beneficiario.belongsToMany(Contrato, { through: 'ContractBeneficiary', foreignKey: 'beneficiario_id' });


// Exporta os modelos
module.exports = {
  Plano,
  Contrato,
  Beneficiario,
  Empresa,
  Operadora
};
