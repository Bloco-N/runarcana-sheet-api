module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    nickname: DataTypes.STRING,
    password: DataTypes.STRING
  })

  return User;
}
