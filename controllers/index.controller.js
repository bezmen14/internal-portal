const indexRender = (req, res) => {
  res.render('index');
};

// const departmentsRender = async (req, res) => {
//   const allDepartment = await db.Department.findAll();
//   res.render('departments', { departments: allDepartment });
// };

// const teamsRender = async (req, res) => {
//   const allTeams = await db.Team.findAll();
//   res.render('teams', { teams: allTeams });
// };

// const usersByDepartment = async (req, res) => {
//   const { id } = req.params;
//   const allUsers = await db.Department.findAll({
//     where: { user_id: id },
//   });
//   res.render('users', { users: allUsers });
// };

// const usersByTeams = async (req, res) => {
//   const { id } = req.params;
//   const allUsers = await db.Team.findAll({
//     where: { user_id: id },
//   });
//   res.render('users', { users: allUsers });
// };

// const userInfoRender = async (req, res) => {
//   const { id } = req.params;
//   const currentUser = await db.Employee.findOne({
//     where: { id },
//   });
//   res.render('userInfo', { user: currentUser });
// };

module.exports = {
  indexRender,
  // departmentsRender,
  // teamsRender,
};
