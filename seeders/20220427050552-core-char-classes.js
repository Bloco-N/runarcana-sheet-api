'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CharClasses', [
      {
        name: 'Acólito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arcano',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Atirador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bodisatva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bruto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caçador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Combatente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mercurial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peregrino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tecmaturgo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Xamã',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('CharClasses', null, {});

  }
};
