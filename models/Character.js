const { database } = require("pg/lib/defaults");

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
      type: DataTypes.INTEGER
    },
    origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lineage_id: {
      type: DataTypes.INTEGER
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    past_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alignment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  })

  return Character;
}