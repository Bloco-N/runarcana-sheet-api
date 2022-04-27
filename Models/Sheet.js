module.exports = (sequelize, Sequelize, DataTypes) => {
  const Sheet = sequelize.define("Sheets", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  return Sheet;
}