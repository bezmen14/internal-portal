module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [
      {
        name: 'T1',
        description: 'olol1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T2',
        description: 'olol2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T3',
        description: 'olol3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  },
};
