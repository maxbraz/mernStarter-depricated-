import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import testData from '../../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: testData
    }
    this.fetch = this.fetch.bind(this);
    this.search = this.search.bind(this);
  }

  search(item) {
    let coordinates;
    axios.post('/item', {
      item: item
    })
    .then(function(response) {
      coordinates = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetch(coordinates);
  }

  fetch(coordinates) {
    let fetchedItems;

    axios.get('/items', {
      params: {
        coordinates: coordinates
      }
    })
    .then(function (response) {
      fetchedItems = response.data;
      this.setState({items: fetchedItems})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>Item Search</h1>
      <Search onSearch={this.search}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));