module.exports = (sequelize, Sequelize, DataTypes) => {
  const SpellClass = sequelize.define("SpellClasses", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    spell_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return SpellClass;
}