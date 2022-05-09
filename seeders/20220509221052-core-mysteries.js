'use strict';

let mysteries = require('../dataSource/mysteries.json');
let magicalSources = require('../dataSource/magicalSources.json');

magicalSources = magicalSources.map(magicalSource => magicalSource.name);

mysteries = mysteries.map(mystery => {

  return {
    name: mystery.name,
    description: mystery.description,
    source_id: magicalSources.indexOf(mystery.source) + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Mysteries', mysteries, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Mysteries', null, {});

  }
};

