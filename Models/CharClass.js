module.exports = (sequelize, Sequelize, DataTypes) => {
  const CharClass = sequelize.define("CharClasses", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return CharClass;
}