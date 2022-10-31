const salesServices = require('../services/sales.services');

const getAll = async (req, res) => {
  const { userId, role } = req.body;
  const result = await salesServices.getAll(userId, role);
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesServices.getById(id);
  return res.status(200).json(result);
};

const create = async (req, res) => {
  const result = await salesServices.create(req.body);
  return res.status(200).json(result);
};

module.exports = { getAll, getById, create };