module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    total_price: DataTypes.FLOAT,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: { 
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
    tableName: 'Sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'Users'});
    Sale.belongsTo(models.User,
      { foreignKey: 'seller_id', as: 'Users'});
    Sale.hasMany(models.SalesProducts,
      { foreignKey: 'sale_id', as: 'SaleProducts'});
  }

  return Sale;
};