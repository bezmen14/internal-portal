'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Role}) {
      this.belongsTo(Role, { foreignKey: 'id' });
    }
  };
  Employee.init({
    user_name: DataTypes.STRING,
    employee_name: DataTypes.STRING,
    emp_mark_delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};