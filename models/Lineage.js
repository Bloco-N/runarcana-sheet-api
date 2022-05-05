module.exports = (sequelize, Sequelize, DataTypes) => {
    const Lineage = sequelize.define("Lineages", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        origin_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Lineage;
}