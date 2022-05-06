module.exports = (sequelize, Sequelize, DataTypes) => {
  const Spell = sequelize.define("Spells", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    range_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    conjuration_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    materials: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })

  return Spell;
}