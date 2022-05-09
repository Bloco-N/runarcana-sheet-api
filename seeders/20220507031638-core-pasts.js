'use strict';

let pasts = require('../dataSource/pasts.json');

pasts = pasts.map(past => {

  return {
    name: past,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pasts', pasts, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pasts', null, {});

  }
};
