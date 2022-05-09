'use strict';

let ranges = require('../dataSource/ranges.json');

ranges = ranges.map(range => {

  return {
    name : range,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Ranges', ranges , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Ranges', null, {});

  }
};
