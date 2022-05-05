module.exports = (sequelize, Sequelize, DataTypes) => {
  const Past = sequelize.define("Pasts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Past;
}