import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import testData from '../../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: testData
    }
    this.fetchItems = this.fetchItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let items;
    axios.post('/item', {
      item: item
    })
    .then(function(response) {
      items = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetch(items);
  }

  fetchItems(items) {
    let fetchedItems;

    axios.get('/items', {
      params: {
        items: items
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
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));