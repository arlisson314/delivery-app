module.exports = (sequelize, DataTypes) => {
  const SaleProducts = sequelize.define('SaleProducts', {
    sale_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    product_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'saleProducts',
  });

  SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Products,
      { foreignKey: 'product_id', as: 'products' });
    SaleProducts.belongsTo(models.Sale,
      { foreignKey: 'sale_id', as: 'sales'});
  };

  return SaleProducts;
};