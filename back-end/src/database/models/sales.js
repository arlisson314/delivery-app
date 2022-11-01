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
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' }, { foreignKey: 'sellerId', as: 'seller' } );
  };
  Sale.associate = (models) => {
    Sale.hasMany(models.SaleProducts,
      { foreignKey: 'saleId', as: 'sales' });
  };

  return Sale;
};