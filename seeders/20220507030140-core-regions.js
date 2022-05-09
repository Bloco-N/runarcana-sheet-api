'use strict';

let regions = require('../dataSource/regions.json');

regions = regions.map(region => {

  return {
    name: region,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Regions', regions, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Regions', null, {});

  }
};
