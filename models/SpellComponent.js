module.exports = (sequelize, Sequelize, DataTypes) => {
    const SpellComponent = sequelize.define("SpellComponents", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      component_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
    return SpellComponent;
  }