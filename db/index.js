const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernStarter', {
  useMongoClient: true,
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
});

let itemSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  votes: Number,
  vetoed: Boolean,
});

let Item = mongoose.model('Item', itemSchema);

module.exports = Item;