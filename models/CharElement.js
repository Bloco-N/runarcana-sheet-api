module.exports = (sequelize, Sequelize, DataTypes) => {
    const CharElement = sequelize.define("CharElements", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        char_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        element_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return CharElement;
}