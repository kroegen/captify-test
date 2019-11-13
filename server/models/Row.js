const mongoose = require('mongoose');
const uuidv4   = require('uuid/v4');
const Schema   = mongoose.Schema;

const RowSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  text: {
    type: String,
  },
  tableId: {
    type : Schema.Types.ObjectId,
    ref  : 'Table',
  },
});

module.exports = mongoose.model('RowModel', RowSchema);
