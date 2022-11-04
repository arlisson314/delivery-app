module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false, field: 'seller_id' },
    totalPrice: { type: DataTypes.NUMBER, field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
    saleDate: { 
      type: DataTypes.DATE,
      field: 'sale_date',
      get: function() {
        return this.getDataValue('saleDate')
          .toLocaleString('en-GB', { timeZone: 'UTC' });
      },
      defaultValue: sequelize.fn('NOW') },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.SaleProducts,
      { foreignKey: 'saleId', as: 'sales' });
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' });
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
    };

  return Sale;
};