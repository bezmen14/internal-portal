const { Router } = require('express');
const {
  teamRender,
  teamCreate,
} = require('../controllers/team.controller');

const teamRouter = Router();

teamRouter.route('/')
  .get(teamRender)
  .post(teamCreate);

module.exports = teamRouter;
