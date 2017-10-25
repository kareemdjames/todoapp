const express = require('express');
const todosRouter = express.Router();

const todoscontroller = require('../controllers/controller');

todoscontroller.get('/', todoscontroller.index);

module.exports = todosRouter;
