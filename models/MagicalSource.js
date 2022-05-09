module.exports = (sequelize, Sequelize, DataTypes) => {
  const MagicalSource = sequelize.define("MagicalSources", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
  return MagicalSource;
}