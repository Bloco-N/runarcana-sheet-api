'use strict';

let pasts = [
  'Andarilho',
  'Apostador',
  'Aristocrata',
  'Artesão',
  'Artista',
  'Charlatão',
  'Criação',
  'Criminoso',
  'Desconhecido',
  'Estudioso',
  'Exilado',
  'Forasteiro',
  'Gladiador',
  'Herói Local',
  'Inventor',
  'Investigador',
  'Marujo',
  'Mercenário',
  'Órfão',
  'Pirata',
  'Religioso',
  'Soldado',
]

pasts = pasts.map(past => {

  return {
    name: past,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pasts', pasts, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pasts', null, {});

  }
};
