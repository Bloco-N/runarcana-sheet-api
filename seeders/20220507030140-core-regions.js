'use strict';

let regions = [
  'Águas de Sentina',
  'Bandópolis',
  'Demacia',
  'Freljord',
  'Ilha das Sombras',
  'Ionia',
  'Ixtal',
  'Noxus',
  'Piltover',
  'Shurima',
  'Targon',
  'Zaun'
]

regions = regions.map(region => {

  return {
    name: region,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Regions', regions, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Regions', null, {});

  }
};
