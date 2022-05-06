'use strict';

const origins = ['Humano','Antroplantae','Construto','Meio-Dragão','Minotauro','Troll','Vastaya','Yordle']

let lineages = [ ['Arbóreo', 'Antroplantae'] , ['Floral', 'Antroplantae'],
['Brutal', 'Construto'] , ['Emissário', 'Construto'], ['Ligeiro', 'Construto'],
['Aquáticos', 'Yordle'], ['Felpudo', 'Yordle'],
['Elemental Glacial', 'Meio-Dragão'], ['Elemental Infernal', 'Meio-Dragão'], ['Elemental da Montanha', 'Meio-Dragão'],
['Elemental das Nuvens', 'Meio-Dragão'], ['Elemental do Oceano', 'Meio-Dragão'],
['Oovi-Kat','Vastaya'], ['Marai','Vastaya'], ['Shimon','Vastaya'], ['Fauhwoon','Vastaya'],
['Ottrani','Vastaya'], ['Kiilash','Vastaya'], ['Lhotlan','Vastaya'],
['Troll da Areia','Troll'], ['Troll do Gelo','Troll'], ['Troll da Selva','Troll'],
['Aelus','Minotauro'], ['Alnuk','Minotauro'], ['Auroque','Minotauro']]

lineages = lineages.map(lineage => {

  return {
    name : lineage[0],
    origin_id: origins.indexOf(lineage[1])+1,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Lineages',lineages , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Lineages', null, {});

  }
};
