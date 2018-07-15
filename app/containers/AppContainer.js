import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppContainer = ({ store, children }) => (
  <Provider store={store}>
    <MuiThemeProvider>{children}</MuiThemeProvider>
  </Provider>
);

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default AppContainer;
