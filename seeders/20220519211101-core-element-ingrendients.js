'use strict';

const elements = require('../dataSource/elements.json');
const elementsName = elements.map(item => item.name);
let recipes = [];

elements.forEach(element => {
  element.recipes.forEach(recipe => {
    recipes.push(recipe);
  })
});


const ingrendients = [];

recipes.forEach((recipe, recipeIndex) => {
  recipe.forEach(ingrendient => {
    ingrendients.push({
      recipe_id: recipeIndex + 1,
      element_id: elementsName.indexOf(ingrendient) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
})

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ElementIngredients', ingrendients, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ElementIngredients', null, {});

  }
};
