module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
    [{
      saleId: 1,
      productId: 1,
      quantity: 4,
    }, 
    {
      saleId: 2,
      productId: 3,
      quantity: 12,
    },
    {
      saleId: 2,
      productId: 4,
      quantity: 8,
    },
    {
      saleId: 3,
      productId: 7,
      quantity: 3,
    },
    {
      saleId: 5,
      productId: 8,
      quantity: 5,
    },
    ], { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
}