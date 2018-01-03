import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Todos from './components/Todos.jsx';
import testData from '../../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  addTodo(todo) {
    let todos;
    axios.post('/item', {
      todo: todo
    })
    .then(function(response) {
      todos = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetchTodos(todos);
  }

  fetchTodos(todos) {
    let fetchedTodos;
    let that = this;

    axios.get('/items', {
      params: {
        todos: todos
      }
    })
    .then(function (response) {
      fetchedTodos = response.data;

      that.setState({todos: fetchedTodos});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>Todos: </h1>
      <Todos todos={this.state.todos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));