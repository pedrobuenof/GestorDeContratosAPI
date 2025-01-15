import express from 'express'
import ContractsController from '../controllers/contractsController';

const router = express.Router();
//***************** CONTRATOS ******************/
// ter cuidado com o bind - talvez tenha que usar (req, res) => ContractsController.getAllContracts(req, res)
router.get('/buscar', ContractsController.getAllContracts)

router.get('/buscar/:id', ContractsController.getContractById)

router.post("/criar", ContractsController.createContract)

router.put('/editar/:id', ContractsController.updateContract)

router.delete('/deletar/:id', ContractsController.deleteContract)

export default router;