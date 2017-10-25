const express = require('express');
const todosRouter = express.Router();

const todoscontroller = require('../controllers/controller');

todosRouter.get('/', todoscontroller.index);



todosRouter.get('/:id', todoscontroller.show);


module.exports = todosRouter;
