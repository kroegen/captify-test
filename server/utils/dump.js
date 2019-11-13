exports.dumpRow = row => {
  return {
    id      : row._id,
    text    : row.text,
    tableId : row.tableId,
  }
}
