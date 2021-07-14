module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employees', [
      {
        user_name: 'ivanov',
        employee_name: 'Иванов Иван Иванович',
        password: 'ivanov',
        email: 'ivanov@mail.ru',
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: 'petrov',
        employee_name: 'Петров Петр Петрович',
        password: 'petrov',
        email: 'petrov@mail.ru',
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: 'sidorov',
        employee_name: 'Сидоров Сидр Сидорович',
        password: 'sidorov',
        email: 'sidorov@mail.ru',
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: 'umolchalkatest',
        employee_name: 'Проверка значения по умолчанию',
        password: 'umolchalkatest',
        email: 'umolchalkatest@mail.ru',
        role_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, { restartIdentity: true, truncate: true });
  },
};
