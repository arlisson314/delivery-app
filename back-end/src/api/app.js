require('express-async-errors');
const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/user.routes');
const productRouter = require('../routes/products.routes');
const salesRouter = require('../routes/sales.routes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(productRouter);
app.use(salesRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
