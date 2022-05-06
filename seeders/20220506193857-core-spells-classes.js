'use strict';

let spells = require('../dataSource/spells.json')

const classes = ['Acólito', 'Arcano', 'Atirador', 'Bodisatva', 'Bruto','Caçador',  'Combatente', 'Mercurial', 'Peregrino',
'Tecmaturgo', 'Xamã']

let spellClasses = []
spells.forEach((spell, index) => {

  for(let runarcanaClass of spell.classes){
    spellClasses.push({

      spell_id : index + 1,
      class_id : classes.indexOf(runarcanaClass) + 1,
      createdAt: new Date(),
      updatedAt: new Date()

    })
  }

})


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellClasses', spellClasses , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellClasses', null, {});

  }
};