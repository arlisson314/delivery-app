const userServices = require('../services/user.services');

const login = async (req, res) => {
  const result = await userServices.login(req.body);
  return res.status(200).json(result);
};

const create = async (req, res) => {
  const result = await userServices.createUser(req.body);
  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const result = await userServices.getAll();
  return res.status(200).json(result);
};

module.exports = { login, create, getAll };