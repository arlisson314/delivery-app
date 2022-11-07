const adminServices = require('../services/admin.services');

const createNewUser = async (req, res) => {
  const result = await adminServices.createNewUser(req.body);
  return res.status(201).json(result);
};

const deleteUser = async (req, res) => {
  await adminServices.deleteUser(req.params.id);
  return res.status(204).end();
};

module.exports = { createNewUser, deleteUser };