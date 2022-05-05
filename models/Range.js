module.exports = (sequelize, Sequelize, DataTypes) => {
    const Range = sequelize.define("Ranges", {
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
    return Range;
  }