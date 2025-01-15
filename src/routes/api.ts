import express from 'express'
const router = express.Router();

const ContractsController = require('../controllers/contractsController')

//***************** CONTRATOS ******************/
// ter cuidado com o bind - talvez tenha que usar (req, res) => ContractsController.getAllContracts(req, res)
router.get('/buscar', ContractsController.getAllContracts)

router.get('/buscar/:id', ContractsController.getContractById)

router.post("/criar", ContractsController.createContract)

router.put('/editar/:id', ContractsController.updateContract)

router.delete('/deletar/:id', ContractsController.deleteContract)

module.exports = router;