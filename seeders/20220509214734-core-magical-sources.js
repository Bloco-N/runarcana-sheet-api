'use strict';

let magicalSources = require('../dataSource/magicalSources.json');

magicalSources = magicalSources.map(magicalSource => {

  return {
    name: magicalSource.name,
    description: magicalSource.description,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('MagicalSources', magicalSources, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('MagicalSources', null, {});

  }
};

