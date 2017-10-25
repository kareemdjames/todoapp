let Todo = require('../models/Todo');

const todoController = {};

todoController.index = (req,res) => {
  Todo.findAll()
    .then(todos => {
      res.status(200).render('todos/todos-index', {
        todos: todos,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

todoController.show = (req, res) => {
  todo.findById(req.params.id)
    .then(todo => {
      res.status(200).render('todos/todos-show.ejs', {
        todo: todo,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};







module.exports = todoController;
