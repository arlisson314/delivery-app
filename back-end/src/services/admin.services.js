const { User } = require('../database/models');
const userServices = require('./user.services');

const createNewUser = async (newUser) => {
  const result = await userServices.createUser(newUser);
  return result;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return true;
};

module.exports = { createNewUser, deleteUser };