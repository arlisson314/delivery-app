module.exports = (sequelize, DataTypes) => {
  const SaleProducts = sequelize.define('SaleProducts', {
    saleId: { type: DataTypes.INTEGER, allowNull: false, field: 'sale_id' },
    productId: { type: DataTypes.INTEGER, allowNull: false, field: 'product_id' },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
  });

  SaleProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, { 
      as: 'products',
      through: SaleProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Product.belongsToMany(models.Sale, { 
      as: 'sales',
      through: SaleProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SaleProducts;
};