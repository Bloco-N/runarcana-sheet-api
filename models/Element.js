module.exports = (sequelize, Sequelize, DataTypes) => {
  const Element = sequelize.define("Elements", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mystery_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return Element;
}