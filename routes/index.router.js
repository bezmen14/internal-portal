const { Router } = require('express');
const { indexRender } = require('../controllers/index.controller');

const indexRouter = Router();

indexRouter.route('/')
  .get(indexRender);

module.exports = indexRouter;
