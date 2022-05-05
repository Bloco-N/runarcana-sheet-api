module.exports = (sequelize, Sequelize, DataTypes) => {
    const Region = sequelize.define("Regions", {
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
    return Region;
}