module.exports = (sequelize, Sequelize, DataTypes) => {
  const ElementIngredient = sequelize.define("ElementIngredients", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    element_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return ElementIngredient;
}