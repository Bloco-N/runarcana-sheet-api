module.exports = (sequelize, Sequelize, DataTypes) => {
    const ElementalDependency = sequelize.define("ElementalDependencies", {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        dependent_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        dependendency_one_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dependendency_two_id: {
            type: DataTypes.INTEGER
        },
        dependendency_three_id: {
            type: DataTypes.INTEGER
        },
        dependendency_four_id: {
            type: DataTypes.INTEGER
        }
    })
    return ElementalDependency;
}