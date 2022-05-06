'use strict';

let origins = ['Humano','Antroplantae','Construto','Meio-Dragão','Minotauro','Troll','Vastaya','Yordle']

origins = origins.map(origin => {

  return {
    name : origin,
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
