'use strict';

const { alignment } = require("../models");

let alignments = [
  'Leal e Bom', 'Neutro e Bom', 'Caótico e Bom',
  'Leal e Neutro', 'Neutro', 'Caótico e Neutro',
  'Leal e Mau', 'Neutro e Mau', 'Caótico e Mau'
]

alignments = alignments.map(alignment => {

  return {
    name: alignment,
    createdAt: new Date(),
    updatedAt: new Date()
  }

})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alignments', alignments, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Alignments', null, {});

  }
};
