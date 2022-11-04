const Sequelize = require('sequelize');
const { Sale } = require('../database/models');
const { User } = require('../database/models');
const { SaleProducts } = require('../database/models');
const { Product } = require('../database/models');
const buildError = require('../error/errorBuilder');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getAll = async (userId, role) => {
  if (!userId || !role) throw buildError(409, 'Invalid id or role');
  if (role === 'customer') {
    const result = await Sale.findAll({
      where: { userId },
      include: [ 
        { model: SaleProducts, as: 'sales' },
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      ],
    });
    return result;
  }
  if (role === 'seller') {
    const result = await Sale.findAll({ 
      where: { sellerId: userId },
      include: [ 
        { model: SaleProducts, as: 'sales' },
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      ],
    });
    return result;
  }
};

const getById = async (orderId) => {
  const result = await Sale.findOne({ where: { id: orderId } });
  if (!result) throw buildError(404, 'Sale not found');
  return result;
};

const create = async (newSale) => {
  const transaction = await sequelize.transaction();
  
  const createdSale = await Sale.create(newSale, { transaction });
  
  const { products } = newSale;
  const saleProducts = products.map((item) => ({
    saleId: createdSale.id,
    productId: item.id,
    quantity: item.quantity,
  }));
  await SaleProducts.bulkCreate(saleProducts, { transaction });

  await transaction.commit();

  return createdSale;
};

module.exports = { getAll, getById, create };