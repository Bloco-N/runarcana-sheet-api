module.exports = (sequelize, Sequelize, DataTypes) => {
    const Conjuration = sequelize.define("Conjurations", {
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
    return Conjuration;
  }