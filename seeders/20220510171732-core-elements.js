'use strict';

let elements = require('../dataSource/elements.json');
let mysteries = require('../dataSource/mysteries.json');

mysteries = mysteries.map(mystery => mystery.name);

elements = elements.map(element => {

  if(mystery.source === 'Elemental'){
    return {
      name: element.name,
      description: element.description,
      mystery_id: mysteries.indexOf(element.name),
      createdAt: new Date(),
      updatedAt: new Date()
    }
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