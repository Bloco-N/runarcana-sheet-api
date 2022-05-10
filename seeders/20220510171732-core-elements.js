'use strict';

let elements = require('../dataSource/elements.json');
let mysteries = require('../dataSource/mysteries.json');

mysteries = mysteries.map(mystery => mystery.name);

elements = elements.map(element => {

  return {
    name: element.name,
    description: element.description,
    mystery_id: mysteries.indexOf(element.name) + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Elements', elements, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Elements', null, {});

  }
};