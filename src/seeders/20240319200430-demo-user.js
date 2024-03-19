'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {     
    await queryInterface.bulkInsert('users', [
      {
        name: 'Solange student',
        email: 'solange@email.com',
        cpf: '63058133022',
        is_active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Igor student',
        email: 'igor@email.com',
        cpf: '99018205028',
        is_active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aline student',
        email: 'aline@email.com',
        cpf: '92797497066',
        is_active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fernando student',
        email: 'fernando@email.com',
        cpf: '17195730000',
        is_active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ricardo instructor',
        email: 'ricardo@email.com',
        cpf: '06946507061',
        is_active: true,
        role: 'instructor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dine instructor',
        email: 'dine@email.com',
        cpf: '80941142078',
        is_active: true,
        role: 'instructor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], 
    {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
    
  }
};
