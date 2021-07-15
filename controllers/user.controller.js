const db = require('../db/models');

const usersRender = async (req, res) => {
  const allUsers = await db.Employee.findAll();
  res.render('users', { users: allUsers });
};

const usersCreate = async (req, res) => {
  try {
    const {
      user_name, employee_name, password, email,
    } = req.body;
    if (user_name && employee_name && password && email) {
      const newUser = await db.Employee.create(
        {
          user_name, employee_name, password, email,
        },
        { returning: true, plain: true },
      );
      return res.status(201).json(newUser);
    }
    return res.sendStatus(406);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  usersRender,
  usersCreate,
};
