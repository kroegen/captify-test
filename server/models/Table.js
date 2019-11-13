const mongoose = require('mongoose');
const uuidv4   = require('uuid/v4');
const Schema   = mongoose.Schema;

const TableSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  rows: [{
    type: Schema.Types.ObjectId,
    ref: 'Row'
  }]
});

TableSchema.pre('save', async function userPreSaveHook(next) {
    this.updatedAt = new Date();

    next();
});

TableSchema.pre('update', function userPreUpdateHook(next) {
    this.update({}, { $set: { updatedAt: new Date() } });

    next();
});

module.exports = mongoose.model('TableModel', TableSchema);
