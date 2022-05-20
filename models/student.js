'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    studentname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.INTEGER,
    birthdate: DataTypes.DATEONLY,
    adult: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};