'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Departments', [
      {
      department_name: 'Генеральный директор',
      employee_id: 3,
      dep_mark_delete: false,
      parent_department_id: 0,
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      department_name: 'Технический директор',
      employee_id: 4,
      dep_mark_delete: false,
      parent_department_id: 3,
      createdAt: new Date (),
      updatedAt: new Date (),
      }, 
      {
      department_name: 'Отдел разработки',
      employee_id: 8,
      dep_mark_delete: false,
      parent_department_id: 4,
      createdAt: new Date (),
      updatedAt: new Date (),
      }, 
      {
      department_name: 'Отдел тестирования',
      employee_id: 9,
      dep_mark_delete: false,
      parent_department_id: 4,
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      department_name: 'Отдел техподдержки',
      employee_id: 10,
      dep_mark_delete: false,
      parent_department_id: 4,
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      department_name: 'Финансовый директор',
      employee_id: 5,
      dep_mark_delete: false,
      parent_department_id: 3,
      createdAt: new Date (),
      updatedAt: new Date (),
      }, 
      {
      department_name: 'Бухгалтерия',
      employee_id: 11,
      dep_mark_delete: false,
      parent_department_id: 8,
      createdAt: new Date (),
      updatedAt: new Date (),
      }, 
      {
      department_name: 'Коммерческий директор',
      employee_id: 1,
      dep_mark_delete: false,
      parent_department_id: 3,
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      department_name: 'Отел продаж КБ',
      employee_id: 12,
      dep_mark_delete: false,
      parent_department_id: 10,
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      department_name: 'Отдел продаж СМБ',
      employee_id: 13,
      dep_mark_delete: false,
      parent_department_id: 10,
      createdAt: new Date (),
      updatedAt: new Date (),
      }, 
      {
      department_name: 'Директор по маркетингу',
      employee_id: 7,
      dep_mark_delete: false,
      parent_department_id: 3,
      createdAt: new Date (),
      updatedAt: new Date (),
      }, 
      {
      department_name: 'Отдел лидогенерации',
      employee_id: 14,
      dep_mark_delete: false,
      parent_department_id: 13,
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      department_name: 'Отел CRM',
      employee_id: 15,
      dep_mark_delete: false,
      parent_department_id: 13,
      createdAt: new Date (),
      updatedAt: new Date (),
      }        
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('Departments',null, {restartIdentity:true, truncate:true});
  }
};

