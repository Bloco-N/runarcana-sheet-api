'use strict';

let runarcanaClasses = require('../dataSource/runarcanaClasses.json');

runarcanaClasses = runarcanaClasses.map(runarcanaClass => {

  return {
    name : runarcanaClass,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('RunarcanaClasses', runarcanaClasses , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('RunarcanaClasses', null, {});

  }
};
