const { Sale } = require('../database/models/sales');
const buildError = require('../error/errorBuilder');

const getAll = async (userId, role) => {
  if (role === 'customer') {
    const result = await Sale.findAll({ where: { user_id: userId } });
  }
};

const getById = async () => {

};

module.exports = { getAll, getById };