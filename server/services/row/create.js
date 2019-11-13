const Row  = require('../../models/Row');
const utils = require('../../utils');

exports.createRow = async(req, res, next) => {
  try {
    const rows = (await Row.find());

    if (rows.length >= 10) {
      return await res.status(500).send({ status: 0, error: 'The amount of rows should be less then 10' });
    }

    const { text, tableId } = req.body;
    const row = new Row({ text, tableId });

    await row.save();
    await res.send({ status: 1, data: { row: utils.dump.dumpRow(row) } });
  } catch (error) {
    return next(error);
  }
};
