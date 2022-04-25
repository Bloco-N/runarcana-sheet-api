const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class User extends Model { };

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  nickname: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: "User"
})

module.exports = User;
