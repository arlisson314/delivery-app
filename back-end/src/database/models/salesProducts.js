module.exports = (sequelize, DataTypes) => {
  const SaleProducts = sequelize.define('SaleProducts', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    productId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
  });

  SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Product,
      { foreignKey: 'productId', as: 'products' });
    SaleProducts.belongsTo(models.Sale,
      { foreignKey: 'saleId', as: 'sales'});
  };

  return SaleProducts;
};