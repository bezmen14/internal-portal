const { Router } = require('express');
const { indexRender } = require('../controllers/index.controller');

const indexRouter = Router();

indexRouter.get('/', indexRender);

module.exports = indexRouter;
