module.exports = (sequelize, Sequelize, DataTypes) => {
    const SpellOrigin = sequelize.define("SpellOrigins", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id : {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      origin_id : {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
    return SpellOrigin;
  }