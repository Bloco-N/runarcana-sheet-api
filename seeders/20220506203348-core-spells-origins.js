'use strict';

const spells = require('../dataSource/spells.json')

const origins = ['Humano','Antroplantae','Construto','Meio-Dragão','Minotauro','Troll','Vastaya','Yordle']

let spellOrigins = []
spells.forEach((spell, index) => {

  for(let origin of spell.origins){
    if(origins.includes(origin)){
      spellOrigins.push({

        spell_id : index + 1,
        origin_id : origins.indexOf(origin) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
  
      })
    }
  }

})


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellOrigins', spellOrigins , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellOrigins', null, {});

  }
};