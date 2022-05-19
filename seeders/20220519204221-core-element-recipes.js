'use strict';

const elements = require('../dataSource/elements.json');
const elementsName = elements.map(item => item.name);
let recipes = [];

elements.forEach(element => {
  element.recipes.forEach(recipe => {
    recipes.push({
      element_id: elementsName.indexOf(element.name) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
});

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ElementRecipes', recipes, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ElementRecipes', null, {});

  }
};
