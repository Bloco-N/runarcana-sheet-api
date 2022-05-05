module.exports = (sequelize, Sequelize, DataTypes) => {
    const Alignment = sequelize.define("Alignments", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
    return Alignment;
}