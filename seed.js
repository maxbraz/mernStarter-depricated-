let Item = require('./db/index.js');
let items = require('./data.json');

for (let item of items) {
  let itemo = new item({
    name: item.name,
    votes: item.votes,
    vetoed: item.vetoed,
  });
  itemo.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully seeded db');
    }
  });
}