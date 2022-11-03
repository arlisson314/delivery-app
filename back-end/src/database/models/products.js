module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    urlImage: { type: DataTypes.STRING, field: 'url_image' },
  },
  {
    timestamps: false,
    tableName: 'products',
  });

  Product.associate = (models) => {
    Product.hasMany(models.SaleProducts,
      { foreignKey: 'productId', as: 'saleProducts' });
  };

  return Product;
};