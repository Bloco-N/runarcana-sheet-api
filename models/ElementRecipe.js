module.exports = (sequelize, Sequelize, DataTypes) => {
  const ElementRecipe = sequelize.define("ElementRecipes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    element_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return ElementRecipe;
}