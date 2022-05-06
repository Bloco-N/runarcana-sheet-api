'use strict';

let spells = require('../dataSource/spells.json')

const components = ['V','S','M']

let SpellComponents = []
spells.forEach((spell, index) => {

  for(let component of spell.components){
    SpellComponents.push({

      spell_id : index + 1,
      component_id : components.indexOf(component) + 1,
      createdAt: new Date(),
      updatedAt: new Date()

    })
  }

})


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellComponents', SpellComponents , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellComponents', null, {});

  }
};