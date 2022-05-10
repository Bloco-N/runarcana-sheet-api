'use strict';

const spells = require('../dataSource/spells.json');
let mysteries = require('../dataSource/mysteries.json');

mysteries = mysteries.map(mystery => mystery.name);

let spellMysteries = []
spells.forEach((spell, spellIndex) => {
  spell.mysteries.forEach(mystery =>{

    spellMysteries.push({
      spell_id: spellIndex + 1,
      mystery_id: mysteries.indexOf(mystery) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })


  })

})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpellMysteries', spellMysteries , {});
 },

 async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('SpellMysteries', null, {});

 }
};
