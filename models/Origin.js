module.exports = (sequelize, Sequelize, DataTypes) => {
    const Origin = sequelize.define("Origins", {
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
    return Origin;
  }