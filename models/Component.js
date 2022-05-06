module.exports = (sequelize, Sequelize, DataTypes) => {
  const Component = sequelize.define("Components", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    symbol: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  })
  return Component;
}