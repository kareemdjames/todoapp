let Todo = require('../models/Todo');

const todoController = {};

todoController.index = (req,res) => {
  Todo.findAll()
    .then(todos => {
      res.status(200).render('/todos/todos-index', {
        todos: todos,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = todoController;
