'use strict';

let origins = require('../dataSource/origins.json');

origins = origins.map(origin => {

  return {
    name : origin.name,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Origins', origins , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Origins', null, {});

  }
};
