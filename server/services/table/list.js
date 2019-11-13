const Row  = require('../../models/Row');
const utils = require('../../utils');

exports.getRows = async (req, res, next) => {
  try {
    const rows = (await Row.find()).map(row => utils.dump.dumpRow(row));

    await res.send({ status: 1, data: rows });
  } catch (error) {
    return next(error);
  }
}
