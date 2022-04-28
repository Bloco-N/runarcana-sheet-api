module.exports = (sequelize, Sequelize, DataTypes) => {
  const SheetClass = sequelize.define("SheetClasses", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sheet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  return SheetClass;
}