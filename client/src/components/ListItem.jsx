import React from 'react';
import ReactDOM from 'react-dom';

const ListItem = ({item}) => (
  <li>
    {`${item.name}`}
  </li>
)

export default ListItem;
