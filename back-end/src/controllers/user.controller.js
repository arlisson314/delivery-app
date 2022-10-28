const userServices = require('../services/user.services');

const login = async (req, res) => {
  try {
    const result = await userServices.login(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const create = async (req, res) => {
  try {
    await userServices.createUser(req.body);
    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { login, create };