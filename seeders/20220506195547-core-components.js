'use strict';

let components = require('../dataSource/components.json');

components = components.map(component => {

  return {
    name: component.name,
    symbol: component.symbol,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
});

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Components', components , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Components', null, {});

  }
};