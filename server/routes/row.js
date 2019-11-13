const express  = require('express');
const row = express.Router();

const rowController = require('../controllers/row');

row.post('/', rowController.createRow);

module.exports = row;
