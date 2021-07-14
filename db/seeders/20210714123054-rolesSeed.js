module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        role_name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: 'not_member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, { restartIdentity: true, truncate: true });
  },
};
