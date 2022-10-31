module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { 
      type: DataTypes.DATE,
      get: function() {
        return this.getDataValue('sale_date')
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
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' }, { foreignKey: 'seller_id', as: 'seller' } );
  };
  Sale.associate = (models) => {
    Sale.hasMany(models.SaleProducts,
      { foreignKey: 'sale_id', as: 'sales' });
  };

  return Sale;
};