const { Router } = require('express');
const salesController = require('../controllers/sales.controller');
const verifyToken = require('../middlewares/verifyToken');

const salesRouter = Router();

salesRouter.get('/orders', salesController.getAll);
salesRouter.get('/orders/:id', verifyToken, salesController.getById);
salesRouter.post('/orders', verifyToken, salesController.create);

module.exports = salesRouter;