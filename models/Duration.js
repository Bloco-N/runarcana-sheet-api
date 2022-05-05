module.exports = (sequelize, Sequelize, DataTypes) => {
    const Duration = sequelize.define("Durations", {
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
    return Duration;
  }