'use strict';

let conjurations = require('../dataSource/conjurations.json');

conjurations = conjurations.map(conjuration => {

  return {
    name : conjuration,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Conjurations', conjurations , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Conjurations', null, {});

  }
};
