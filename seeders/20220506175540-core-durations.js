'use strict';

let durations = require('../dataSource/durations.json');

durations = durations.map(duration => {

  return {
    name : duration,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Durations', durations , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Durations', null, {});

  }
};
