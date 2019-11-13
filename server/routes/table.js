const express  = require('express');
const table = express.Router();

const tableController = require('../controllers/table');

table.get('/', tableController.getRows);

module.exports = table;
