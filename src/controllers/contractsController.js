// src/controllers/contracts.controller.js

const contractsRepository = require('../repository/contractsRepository');

class ContractsController {
  async getAllContracts(req, res) {
    try {
      const contracts = await contractsRepository.getAllContracts();
      res.json(contracts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getContractById(req, res) {
    try {
      const id = req.params.id;
      console.log("inicio");
      
      const contracts = await contractsRepository.getContractsById(id);
      res.json(contracts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createContract(req, res) {
    try {
      console.log("Entrou");
      const data = req.body;
      console.log("Pegamos o body", data);
      const newContract = await contractsRepository.createContract(data);
      console.log("fomos la no banco");
      
      res.status(201).json(newContract);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateContract(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      console.log("Inicio");
      console.log(id);
      console.log(data);
      
      const updatedContract = await contractsRepository.updateContract(id, data);
      res.json(updatedContract);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteContract(req, res) {
    try {
      const id = req.params.id;
      await contractsRepository.deleteContract(id);
      res.status(204).send(); // No content
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ContractsController();
