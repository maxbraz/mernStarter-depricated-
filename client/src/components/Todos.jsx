import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.jsx';

const Todos = ({todos}) => (
  <div>
    <ol>
      {todos.map((todo, i) => {
        return <Todo key={i} todo={todo} />
      })}
    </ol>
  </div>
)

export default Todos;