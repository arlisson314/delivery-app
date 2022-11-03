const { Product } = require('../database/models');
const buildError = require('../error/errorBuilder');

const getAll = async () => {
  const result = await Product.findAll();
  return result;
};

const getById = async (id) => {
  const result = await Product.findOne({ where: { id } });

  if (!result) throw buildError(404, 'Product does not exist');
  return result;
};

module.exports = { getAll, getById };