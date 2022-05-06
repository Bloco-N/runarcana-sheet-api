'use strict';

let spells = require('../dataSource/spells.json')
const conjurations = require('../dataSource/conjurations.json')
const durations = require('../dataSource/durations.json')
const ranges = require('../dataSource/ranges.json')

spells = spells.map(spell =>{

  return {
    name: spell.name,
    level: spell.level,
    materials: spell.materials,
    description: spell.description,
    range_id: ranges.indexOf(spell.range) + 1,
    conjuration_id: conjurations.indexOf(spell.conjuration) + 1,
    duration_id: durations.indexOf(spell.duration) + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }


})

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Spells', spells , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Spells', null, {});

  }
};
