const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Item = require('../db/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/dist')));

app.post('/item', (req, res) => {
  let item = new Item({
    'name': req.body.name,
    'votes': req.body.votes,
    'vetoed': false,
  });

  res.send(JSON.stringify('Successful Post!'));
});

app.get('/items', (req, res) => {

  Item.find({}).limit(5).exec( (err, items) => {
    if (err) {
      console.log( 'server get failure', err);
    } else {
      console.log('Successful Get!');
    }
    res.end(JSON.stringify(items));
  });
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`MERN Starter listening on ${port}`);
});