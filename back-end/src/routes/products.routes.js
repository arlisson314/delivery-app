const { Router } = require('express');
const productController = require('../controllers/products.controller');
const verifyToken = require('../middlewares/verifyToken');

const productRouter = Router();

productRouter.get('/customer/products:', verifyToken, productController.getAll);
productRouter.get('/customer/products/:id', verifyToken, productController.getById);

module.exports = productRouter;