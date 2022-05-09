'use strict';

const spells = require('../dataSource/spells.json');
const origins = require('../dataSource/origins.json');

let lineages = [];
origins.forEach(origin => origin.lineages.forEach(lineage => lineages.push(lineage)));

let spellLineages = [];
spells.forEach((spell, spellIndex) => {
  spell.origins.forEach(lineage => {

    if(lineages.includes(lineage)){
      spellLineages.push({
        spell_id : spellIndex + 1,
        lineage_id : lineages.indexOf(lineage) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

  });
});



module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellLineages', spellLineages , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellLineages', null, {});

  }
};