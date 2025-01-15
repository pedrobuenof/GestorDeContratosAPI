import { Request, Response } from "express";
import ContratoType from "../types";

const contractsRepository = require('../repository/contractsRepository');


class ContractsController {
  async getAllContracts(req: Request, res:Response) {
    try {
      const contracts: [ContratoType] = await contractsRepository.getAllContracts();
      res.json(contracts);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({error: error.message});
      } else {
        res.status(500).json({error: "An unknown error occurred"})
      }
    }
  }

  async getContractById(req: Request, res:Response) {
    try {
      const id: string = req.params.id;
      console.log("inicio");
      
      const contracts: ContratoType = await contractsRepository.getContractsById(id);
      res.json(contracts);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({error: error.message});
      } else {
        res.status(500).json({error: "An unknown error occurred"})
      }
    }
  }

  async createContract(req: Request, res:Response) {
    try {
      console.log("Entrou");
      const data: Object = req.body;
      console.log("Pegamos o body", data);
      const newContract: ContratoType = await contractsRepository.createContract(data);
      console.log("fomos la no banco");
      
      res.status(201).json(newContract);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({error: error.message});
      } else {
        res.status(500).json({error: "An unknown error occurred"})
      }
    }
  }

  async updateContract(req: Request, res:Response) {
    try {
      const id: string = req.params.id;
      const data: object = req.body;
      console.log("Inicio");
      console.log(id);
      console.log(data);
      
      const updatedContract: ContratoType = await contractsRepository.updateContract(id, data);
      res.json(updatedContract);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({error: error.message});
      } else {
        res.status(500).json({error: "An unknown error occurred"})
      }
    }
  }

  async deleteContract(req: Request, res:Response) {
    try {
      const id: string = req.params.id;
      await contractsRepository.deleteContract(id);
      res.status(204).send(); // No content
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({error: error.message});
      } else {
        res.status(500).json({error: "An unknown error occurred"})
      }
    }
  }
}

export default new ContractsController();
