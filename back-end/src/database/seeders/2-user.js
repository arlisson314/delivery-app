module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
    [{
      id: 1,
      name: 'Jorge',
      email: 'jorge25@gmail.com',
      password: 'jorge123',
      role: 'customer'
    }, 
    {
      id: 2,
      name: 'Flavio',
      email: 'flavio13@gmail.com',
      password: 'flavio999',
      role: 'seller'
    },
    {
      id: 3,
      name: 'Roberta',
      email: 'roberta15@gmail.com',
      password: 'roberta789',
      role: 'seller'
    }, 
    {
      id: 4,
      name: 'Amanda',
      email: 'amanda05@gmail.com',
      password: 'amanda555',
      role: 'administrator'
    },
    {
      id: 5,
      name: 'Joao',
      email: 'joao24@gmail.com',
      password: 'joao222',
      role: 'customer'
    }, 
    ], { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
}