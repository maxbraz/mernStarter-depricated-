import React from 'react';

const style = {
  input: {
    width: '256px',
    marginRight: '3px'
  },
  button: {
    backgroundColor: 'green',
  },
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.item);
    this.setState({
      item: ''
    });
  }

  render() {
    return (
    <div>
      <h4>Search an Item </h4>
      <input
        placeholder="Item Placeholder"
        style={style.input}
        value={this.state.item}
        onChange={this.onChange}
      />
      <button onClick={this.search} style={style.button}> Search </button>
    </div>
    )
  }
}

export default Search;