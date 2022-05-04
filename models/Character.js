module.exports = (sequelize, Sequelize, DataTypes) => {
  const Character = sequelize.define("Characters", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    region: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    past: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alignment: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  })

  return Character;
}