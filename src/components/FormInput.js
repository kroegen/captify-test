import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

@inject('tableStore')
@observer
class FormInput extends React.Component {
  @observable text = '';

  handleAddRow = async  () => {
    const { addRow } = this.props.tableStore;

    this.props.triggerLoader();

    await addRow({ text: this.text });

    this.props.triggerLoader();
    this.text = '';
  }

  handleChange = event => {
    const { error, clearError } = this.props.tableStore;

    if (error) {
      clearError();
    }

    this.text = event.target.value;
  }

  render() {
    const { error } = this.props.tableStore;

    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        padding={20}
      >
        <Grid item xs={9}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">New row</InputLabel>
            <Input
                error={!!error}
                id="my-input"
                aria-describedby="my-helper-text"
                placeholder="Type text here"
                value={this.text}
                onChange={this.handleChange}
            />
            <FormHelperText id="my-helper-text" error={!!error}>{error}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary" onClick={this.handleAddRow}>Add Row</Button>
        </Grid>
      </Grid>
    )
  }
}

export default FormInput;
