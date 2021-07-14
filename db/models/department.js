'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Employee}) {
      this.belongsTo(Employee, { foreignKey: 'employee_id' });
    }
  };
  Department.init({
    department_name: DataTypes.STRING,
    dep_mark_delete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};