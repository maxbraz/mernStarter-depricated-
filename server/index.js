const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const parser = require('parse-address');
const zipcodes = require('zipcodes');
const Item = require('../db/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/dist')));

app.post('/item', (req, res) => {
  // post to db
  res.send(JSON.stringify('Successful Post'));
});

app.get('/items', (req, res) => {
  // get from db

  Item.find({}).limit(5).exec( (err, items) => {
    if (err) {
      console.log( 'server get request failure', err);
    } else {
      console.log('Success!');
    }
    res.end(JSON.stringify(items));
  });
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`MERN Starter listening on ${port}`);
});