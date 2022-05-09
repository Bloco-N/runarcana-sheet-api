'use strict';

const spells = require('../dataSource/spells.json');
let components = require('../dataSource/components.json')

components = components.map(components => components.symbol);

let SpellComponents = []
spells.forEach((spell, spellIndex) => {
  spell.components.forEach(component => {

    SpellComponents.push({
      spell_id : spellIndex + 1,
      component_id : components.indexOf(component) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });

  });
});

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellComponents', SpellComponents , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellComponents', null, {});

  }
};