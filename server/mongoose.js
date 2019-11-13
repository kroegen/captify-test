const mongoose = require('mongoose');
const config   = require('./bin/config.json');

require('./models/Table.js');
require('./models/Row.js');

mongoose.Promise = global.Promise;

const setUpConnection = () => {
  console.log(`MongoDB config: ${JSON.stringify(config)}`);
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true });
}

module.exports = {
  mongoose,
  setUpConnection
};
