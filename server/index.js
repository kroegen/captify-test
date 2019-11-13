const path         = require('path');
const express      = require('express');
const logger       = require('morgan');
const helmet       = require('helmet');
const http         = require('http');
const cors         = require('cors')
const app          = express();

const router     = require('./routes');
const publicPath = path.join(__dirname, '../build');
const port       = process.env.PORT || '3001';
const server     = http.createServer(app);

const db         = require('./mongoose.js');

// Set up connection of db
db.setUpConnection();

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));
app.use(helmet())

app.use('/api', router);

app.set('port', port);

server.listen(port, () => {
  console.info(`Server has started on port: ${port}`);
});
