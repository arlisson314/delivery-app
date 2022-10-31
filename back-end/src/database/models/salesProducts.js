module.exports = (sequelize, DataTypes) => {
  const SaleProducts = sequelize.define('SaleProducts', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    productId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'saleProducts',
  });

  SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Product,
      { foreignKey: 'product_id', as: 'products' });
    SaleProducts.belongsTo(models.Sale,
      { foreignKey: 'sale_id', as: 'sales'});
  };

  return SaleProducts;
};