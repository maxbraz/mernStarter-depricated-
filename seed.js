let Todo = require('./db/index.js');
let todos = require('./data.json');

for (let todo of todos) {
  let todoo = new Todo({
    todo: todo.todo,
    completed: todo.completed,
  });
  todoo.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully seeded db');
    }
  });
}