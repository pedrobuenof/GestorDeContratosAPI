import Contrato from "../models/Contract";
import ContratoType from "../types";

class ContractsRepository {
  // Buscar todos os contratos
  async getAllContracts() {
    return await Contrato.findAll(); // Retorna todos os contratos do banco
  }

  // Buscar contrato(s) por parâmetro
  async getContractsById(id: string) {
    return await Contrato.findAll({
      where: {
        id: id,
      },
    });
  }

  // Criar um contrato
  async createContract(data: ContratoType) {
    console.log("Dentro do repository create");
    // Fazer uma validação se o número do contrato é o mesmo ou não - para evitar cadastro duplicado
    return await Contrato.create(data); // Cria o contrato com os dados recebidos
  }

  // Editar um contrato
  async updateContract(id: string, data: ContratoType) {
    console.log("REPOSITORY");
    
    const contract = await Contrato.findByPk(id);
    console.log(contract);
    
    if (!contract) {
      throw new Error('Contrato não encontrado');
    }
    return await contract.update(data); // Atualiza o contrato
  }

  // Deletar um contrato
  async deleteContract(id: string) {
    const contract = await Contrato.findByPk(id);
    if (!contract) {
      throw new Error('Contrato não encontrado');
    }
    await contract.destroy(); // Remove o contrato
    return true;
  }
}

export default new ContractsRepository();
