const db = require('../db/models');

const departmentsRender = async (req, res) => {
  const allDepartment = await db.Team.findAll();
  res.render('teams', { departments: allDepartment });
};

const departmentsCreate = async (req, res) => {
  try {
    const {
      department_name,
    } = req.body;
    if (department_name) {
      const newDepartment = await db.Department.create(
        {
          department_name,
        },
        { returning: true, plain: true },
      );
      return res.status(201).json(newDepartment);
    }
    return res.sendStatus(406);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  departmentsRender,
  departmentsCreate,
};
