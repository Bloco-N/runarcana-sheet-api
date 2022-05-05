module.exports = (sequelize, Sequelize, DataTypes) => {
    const SpellMystery = sequelize.define("SpellMysteries", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mystery_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
    return SpellMystery;
  }