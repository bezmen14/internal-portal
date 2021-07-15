'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Ad}) {
      // define association here
      this.hasMany(Ad,{foreignKey:'userId'});
    }
  };
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};