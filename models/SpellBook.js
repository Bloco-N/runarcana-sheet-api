module.exports = (sequelize, Sequelize, DataTypes) => {
    const SpellBook = sequelize.define("SpellBooks", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      char_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      spell_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    })
    return SpellBook;
  }