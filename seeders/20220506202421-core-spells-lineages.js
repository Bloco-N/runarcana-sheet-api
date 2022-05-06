'use strict';

const spells = require('../dataSource/spells.json')

let lineages = [ ['Arbóreo', 'Antroplantae'] , ['Floral', 'Antroplantae'],
['Brutal', 'Construto'] , ['Emissário', 'Construto'], ['Ligeiro', 'Construto'],
['Aquáticos', 'Yordle'], ['Felpudo', 'Yordle'],
['Elemental Glacial', 'Meio-Dragão'], ['Elemental Infernal', 'Meio-Dragão'], ['Elemental da Montanha', 'Meio-Dragão'],
['Elemental das Nuvens', 'Meio-Dragão'], ['Elemental do Oceano', 'Meio-Dragão'],
['Oovi-Kat','Vastaya'], ['Marai','Vastaya'], ['Shimon','Vastaya'], ['Fauhwoon','Vastaya'],
['Ottrani','Vastaya'], ['Kiilash','Vastaya'], ['Lhotlan','Vastaya'],
['Troll da Areia','Troll'], ['Troll do Gelo','Troll'], ['Troll da Selva','Troll'],
['Aelus','Minotauro'], ['Alnuk','Minotauro'], ['Auroque','Minotauro']]

lineages = lineages.map(lineage => lineage[0])

let spellLineages = []
spells.forEach((spell, index) => {

  for(let lineage of spell.origins){
    if(lineages.includes(lineage)){
      spellLineages.push({

        spell_id : index + 1,
        lineage_id : lineages.indexOf(lineage) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
  
      })
    }
  }

})


module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('SpellLineages', spellLineages , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpellLineages', null, {});

  }
};