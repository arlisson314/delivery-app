module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products',
    [{
      id: 1,
      name: 'Antartica',
      price: 3.92,
      url_image: 'urlantartica',
    }, 
    {
      id: 2,
      name: 'Brahma',
      price: 3.55,
      url_image: 'urlBrahma',
    }, 
    {
      id: 3,
      name: 'Skol',
      price: 3.12,
      url_image: 'urlSkol',
    },
    ], { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
}