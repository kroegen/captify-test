const express = require('express');
const router  = express.Router();

const table  = require('./table');
const row    = require('./row');

router.use('/table', table);
router.use('/row', row);

module.exports = router;
