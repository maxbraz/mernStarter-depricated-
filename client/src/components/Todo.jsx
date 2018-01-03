import React from 'react';
import ReactDOM from 'react-dom';

const Todo = ({todo}) => (
  <li>
    {`${todo.todo}`}
  </li>
)

export default Todo;
