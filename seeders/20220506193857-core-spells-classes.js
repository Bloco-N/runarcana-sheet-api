'use strict';

const spells = require('../dataSource/spells.json')
const runarcanaClasses = require('../dataSource/runarcanaClasses.json')

let spellClasses = []
spells.forEach((spell, spellIndex) => {
  spell.classes.forEach((runarcanaClass) =>{

    spellClasses.push({
      spell_id : spellIndex + 1,
      class_id : runarcanaClasses.indexOf(runarcanaClass) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })

  });
});


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellClasses', spellClasses , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellClasses', null, {});

  }
};