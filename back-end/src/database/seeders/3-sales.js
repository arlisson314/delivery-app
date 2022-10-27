module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [{
      id: 1,
      user_id: 1,
      seller_id: 3,
      total_price: 34.90,
      delivery_address: 'Rua Marechal',
      delivery_number: '256',
      sale_date: new Date('2022-11-10T13:45:00.000Z'),
      status: 'Pendente',
    },
    {
      id: 2,
      user_id: 5,
      seller_id: 2,
      total_price: 26.25,
      delivery_address: 'Rua Theodoro',
      delivery_number: '27',
      sale_date: new Date('2022-10-12T13:45:00.000Z'),
      status: 'Pendente',
    }, 
    {
      id: 3,
      user_id: 5,
      seller_id: 3,
      total_price: 75.30,
      delivery_address: 'Rua Olavo',
      delivery_number: '134',
      sale_date: new Date('2022-11-05T13:45:00.000Z'),
      status: 'Preparando',
    }, 
    {
      id: 4,
      user_id: 1,
      seller_id: 2,
      total_price: 98.45,
      delivery_address: 'Rua Ernesto',
      delivery_number: '25',
      sale_date: new Date('2022-11-09T13:45:00.000Z'),
      status: 'Em Trânsito',
    },
    {
      id: 5,
      user_id: 1,
      seller_id: 2,
      total_price: 125.25,
      delivery_address: 'Rua Marilia',
      delivery_number: '88',
      sale_date: new Date('2022-11-08T13:45:00.000Z'),
      status: 'Entregue',
    },
    ], { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
}