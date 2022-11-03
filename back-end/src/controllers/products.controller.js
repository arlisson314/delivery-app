const productServices = require('../services/products.services');

const getAll = async (_req, res) => {
  const result = await productServices.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await productServices.getById(req.params.id);
  return res.status(200).json(result);
};

module.exports = { getAll, getById };