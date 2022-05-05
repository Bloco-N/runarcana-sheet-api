module.exports = (sequelize, Sequelize, DataTypes) => {
    const Mystery = sequelize.define("Mysteries", {
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
          type: DataTypes.STRING,
          allowNull: false
      }
    })
    return Mystery;
  }