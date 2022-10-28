module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [{
      id: 1,
      name: 'Skol Lata 350ml',
      price: 2.20,
      url_image: 'https://i.imgur.com/Te9OoBv.jpg',
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: 7.50,
      url_image: 'https://i.imgur.com/DJ8LQSU.jpg',
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      url_image: 'https://i.imgur.com/Autf312.jpg',
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: 7.50,
      url_image: 'https://i.imgur.com/Qdu5bWM.jpg',
    },
    {
      id: 5,
      name: 'Skol 269ml',
      price: 2.19,
      url_image: 'https://i.imgur.com/jX1gWji.jpg',
    },
    {
      id: 6,
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      url_image: 'https://i.imgur.com/NtLMei3.jpg',
    },
    {
      id: 7,
      name: 'Becks 330ml',
      price: 4.99,
      url_image: 'https://i.imgur.com/TEp2AMS.jpg',
    },
    {
      id: 8,
      name: 'Brahma Duplo Malte 350ml',
      price: 2.79,
      url_image: 'https://i.imgur.com/vjMdZu8.jpg',
    },
    {
      id: 9,
      name: 'Becks 600ml',
      price: 8.89,
      url_image: 'https://i.imgur.com/ASIi9yw.jpg',
    },
    {
      id: 10,
      name: 'Skol Beats Senses 269ml',
      price: 3.57,
      url_image: 'https://i.imgur.com/T4Sc0EU.jpg',
    },
    {
      id: 11,
      name: 'Stella Artois 275ml',
      price: 3.49,
      url_image: 'https://i.imgur.com/ZeMCcHm.jpg',
    },
    {
      id: 12,
      name: 'Da Mantiqueira Red Ale 300ml',
      price: 12.35,
      url_image: 'https://i.imgur.com/fUBMQ0x.jpg',
    },
    ], { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
}