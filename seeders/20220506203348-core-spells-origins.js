'use strict';

const spells = require('../dataSource/spells.json');
let origins = require('../dataSource/origins.json');

origins = origins.map(origin => origin.name);

let spellOrigins = [];
spells.forEach((spell, spellIndex) => {
  spell.origins.forEach(origin => {

    if(origins.includes(origin)){
      spellOrigins.push({
        spell_id : spellIndex + 1,
        origin_id : origins.indexOf(origin) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

  });
});


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellOrigins', spellOrigins , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellOrigins', null, {});

  }
};