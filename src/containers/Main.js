import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core';

import FormInput from './../components/FormInput';
import FormTable from './../components/FormTable';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styles from './Main.styles';

@withStyles(styles)
@inject('tableStore')
@observer
class Main extends React.Component {
  @observable text = '';
  @observable isLoading = false;

  componentDidMount = async () => {
    const { tableStore } = this.props;

    this.triggerLoader();

    await tableStore.fetchTable();

    this.triggerLoader();
  }

  triggerLoader = () => {
    this.isLoading = !this.isLoading;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          padding={20}
        >
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <FormInput triggerLoader={this.triggerLoader} />
              <FormTable isLoading={this.isLoading} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
