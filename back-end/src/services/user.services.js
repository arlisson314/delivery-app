require('dotenv/config');
const md5 = require('md5');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../database/models');
const buildError = require('../error/errorBuilder');

const jwtSecret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw buildError(404, 'Not found');
  
  const validatePass = md5(password) === user.password;
  if (!validatePass) throw buildError(404, 'Not found');
  
  const token = jwt.sign({ data: user }, jwtSecret, { expiresIn: '7d', algorithm: 'HS256' });
  delete user.dataValues.password;
  user.dataValues.token = token;
  return user.dataValues;
};

const createUser = async ({ name, email, password }) => {
  const user = await User.findOne({
    where: { [Op.or]: [{ name }, { email }] },
  });

  if (user) throw buildError(409, 'Conflict');

  const hashPass = md5(password);
  const newUser = await User.create({ name, email, password: hashPass, role: 'customer' });

  return newUser;
};

const getAll = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return result;
};

module.exports = { login, createUser, getAll };