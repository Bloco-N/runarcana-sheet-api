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
    },
    char_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    past: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false
    }

  })

  return Sheet;
}