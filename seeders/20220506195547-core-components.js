'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Components', [
       {
         name: 'Verbal',
         symbol: 'V',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        name: 'Somático',
        symbol: 'S',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Material',
        symbol: 'M',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ] , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Components', null, {});

  }
};