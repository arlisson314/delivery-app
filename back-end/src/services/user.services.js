const fs = require('fs').promises;
const md5 = require('md5');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { buildError } = require('../error/errorBuilder');

const JWT_SECRET = async () => fs.readFile('./jwt.evaluation.key', 'utf-8');
const secret = JWT_SECRET();

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return buildError(404, 'Invalid email');

  const validatePass = md5(password) === user.password;
  if (!validatePass) return buildError(404, 'Invalid password');

  const token = jwt.sign({ data: user }, secret, { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

const createUser = async ({ name, email, password }) => {
  const user = await User.findOne({
    where: { [Op.or]: [{ name }, { email }] },
  });

  if (user) return buildError(409, 'Conflict');

  const hashPass = md5(password);
  const newUser = await User.create({ name, email, password: hashPass, role: 'customer' });

  return newUser;
};

module.exports = { login, createUser };