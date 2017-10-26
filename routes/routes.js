const express = require('express');
const todosRouter = express.Router();

const todoscontroller = require('../controllers/controller');

todosRouter.get('/', todoscontroller.index);

todosRouter.get('/new', (req, res) => {
  res.render('todos/todos-new');
});

todosRouter.post('/', todoscontroller.create);

todosRouter.get('/:id', todoscontroller.show);
todosRouter.get('/:id/edit1', todoscontroller.edit);
todosRouter.put('/:id', todoscontroller.update);


module.exports = todosRouter;
