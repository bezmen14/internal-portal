'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Teams', [
      {
      team_name: 'Молодости нашей',
      team_mark_delete: false,
      project_id: 1,
      data_start: '2021-07-14 00:00:00',
      data_end: '2021-07-31 00:00:00',
      employee_id: 4, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Молодости нашей',
      team_mark_delete: false,
      project_id: 1,
      data_start: '2021-07-14 00:00:00',
      data_end: '2021-07-31 00:00:00',
      employee_id: 3, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Молодости нашей',
      team_mark_delete: false,
      project_id: 1,
      data_start: '2021-07-14 00:00:00',
      data_end: '2021-07-31 00:00:00',
      employee_id: 8, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Молодости нашей',
      team_mark_delete: false,
      project_id: 1,
      data_start: '2021-07-14 00:00:00',
      data_end: '2021-07-31 00:00:00',
      employee_id: 4, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Молодости нашей',
      team_mark_delete: false,
      project_id: 1,
      data_start: '2021-07-14 00:00:00',
      data_end: '2021-07-31 00:00:00',
      employee_id: 9, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Old Sculls',
      team_mark_delete: false,
      project_id: 2,
      data_start: '2021-08-01 00:00:00',
      data_end: '2021-09-30 00:00:00',
      employee_id: 12, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Old Sculls',
      team_mark_delete: false,
      project_id: 2,
      data_start: '2021-08-01 00:00:00',
      data_end: '2021-09-30 00:00:00',
      employee_id: 13, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Old Sculls',
      team_mark_delete: false,
      project_id: 2,
      data_start: '2021-08-01 00:00:00',
      data_end: '2021-09-30 00:00:00',
      employee_id: 14, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
      {
      team_name: 'Old Sculls',
      team_mark_delete: false,
      project_id: 2,
      data_start: '2021-08-01 00:00:00',
      data_end: '2021-09-30 00:00:00',
      employee_id: 3, 
      createdAt: new Date (),
      updatedAt: new Date (),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('Teams',null, {restartIdentity:true, truncate:true});
  }
};