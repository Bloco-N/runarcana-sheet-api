module.exports = (sequelize, Sequelize, DataTypes) => {
  const SpellLineage = sequelize.define("SpellLineages", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    spell_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lineage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return SpellLineage;
}