import React from 'react';
import { Provider } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import stores from './stores';
import MainContainer from './containers/Main';

// in case of stylings
const muiTheme = createMuiTheme();

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <MainContainer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
