module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [{
      id: 1,
      userId: 3,
      sellerId: 2,
      totalPrice: 34.90,
      deliveryAddress: 'Rua Marechal',
      deliveryNumber: '256',
      saleDate: new Date('2022-11-10T13:45:00.000Z'),
      status: 'Pendente',
    },
    {
      id: 2,
      userId: 3,
      sellerId: 2,
      totalPrice: 26.25,
      deliveryAddress: 'Rua Theodoro',
      deliveryNumber: '27',
      saleDate: new Date('2022-10-12T13:45:00.000Z'),
      status: 'Pendente',
    }, 
    {
      id: 3,
      userId: 3,
      sellerId: 2,
      totalPrice: 75.30,
      deliveryAddress: 'Rua Olavo',
      deliveryNumber: '134',
      saleDate: new Date('2022-11-05T13:45:00.000Z'),
      status: 'Preparando',
    }, 
    {
      id: 4,
      userId: 3,
      sellerId: 2,
      totalPrice: 98.45,
      deliveryAddress: 'Rua Ernesto',
      deliveryNumber: '25',
      saleDate: new Date('2022-11-09T13:45:00.000Z'),
      status: 'Em Trânsito',
    },
    {
      id: 5,
      userId: 3,
      sellerId: 2,
      totalPrice: 125.25,
      deliveryAddress: 'Rua Marilia',
      deliveryNumber: '88',
      saleDate: new Date('2022-11-08T13:45:00.000Z'),
      status: 'Entregue',
    },
    ], { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
}