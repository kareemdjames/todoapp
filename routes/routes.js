const express = require('express');
const todosRouter = express.Router();

const todoscontroller = require('../controllers/controller');

todosRouter.get('/', todoscontroller.index);

module.exports = todosRouter;
