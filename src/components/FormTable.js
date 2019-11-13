import React from 'react';
import { observer, inject } from 'mobx-react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

@inject('tableStore')
@observer
class FormTable extends React.Component {
  renderTable = () => {
    const { table } = this.props.tableStore;

    if (table.length && !this.props.isLoading) {
      return table.map(row => {
        return (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">{row.text}</TableCell>
          </TableRow>
        );
      });
    } else {
      return (
        <TableRow>
          <TableCell component="th" scope="row" align="center"><CircularProgress /></TableCell>
        </TableRow>
      )
    }
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { this.renderTable() }
        </TableBody>
      </Table>
    )
  }
}

export default FormTable;
