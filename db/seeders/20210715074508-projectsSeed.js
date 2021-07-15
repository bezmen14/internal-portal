module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        project_name: 'Мобильные приложения',
        proj_mark_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_name: 'Экспансия продаж',
        proj_mark_delete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, { restartIdentity: true, truncate: true });
  },
};
