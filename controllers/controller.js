let Todo = require('../models/Todo');

const todoController = {};

todoController.index = (req,res) => {
  Todo.findAll()
    .then(todos => {
      res.status(200).render('todos/todos-index.ejs', {
        todos: todos,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

todoController.show = (req, res) => {
  Todo.findByID(req.params.id)
    .then(todo => {
      res.status(200).render('todos/todos-show1.ejs', {
        todo: todo,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

todoController.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    status: req.body.status,
  }).then(todo => {
    res.redirect(`/todos/${todo.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

todoController.edit = (req, res) => {
  Todo.findByID(req.params.id)
    .then(todo => {
      res.status(200).render('todos/todos-edit1', {
        todo: todo,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

todoController.update = (req, res) => {
  Todo.update({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    status: req.body.status,
  }, req.params.id)
    .then(todo => {
      res.redirect(`/todos/${todo.id}`)
    }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};





module.exports = todoController;
