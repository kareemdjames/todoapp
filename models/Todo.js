const db = require('../db/config');

const Todo = {};

//returns all todos
Todo.findAll = () => {
  return db.query('SELECT * FROM todo')
};
// returns one todos by id
Todo.findByID = id => {
  return db.one(
    `SELECT * FROM todo
    WHERE id = $1`, [id] );
};

module.exports = Todo;
