const { Router } = require('express');
const { departmentsRender, departmentsCreate } = require('../controllers/department.controller');

const departmentRouter = Router();

departmentRouter.route('/')
  .get(departmentsRender)
  .post(departmentsCreate);

module.exports = departmentRouter;
