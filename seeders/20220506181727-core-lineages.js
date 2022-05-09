'use strict';

const origins = require('../dataSource/origins.json');

let lineages = []
origins.forEach((origin, originIndex) => {
  origin.lineages.forEach(lineage => {

    lineages.push({
      name: lineage,
      origin_id: originIndex + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })

  });
});

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Lineages', lineages, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Lineages', null, {});

  }
};
