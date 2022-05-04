module.exports = (sequelize, Sequelize, DataTypes) => {
  const RunarcanaClass = sequelize.define("RunarcanaClasses", {
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

  return RunarcanaClass;
}