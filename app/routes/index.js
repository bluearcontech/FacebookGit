import React from 'react';
import { Router, Route, IndexRoute, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SideBar from '../components/Sidebar';

import { menuAction } from '../actions/menu';

import Home from './Home';
import Repository from './Repository';

export default store => {
  const history = createBrowserHistory();
  const clickMenu = () => {
    const menuState = store.getState('menu').menu;
    store.dispatch(menuAction(!menuState));
  };
  const routes = (
    <Router history={history}>
      <div>
        <AppBar
          title="Facebook Projects"
          iconElementLeft={
            <IconButton>
              <NavigationMenu onClick={clickMenu} />
            </IconButton>
          }
        />
        <SideBar />
        <Route path="/" exact component={Home} />
        <Route path="/repo/:id" exact component={Repository} />
      </div>
    </Router>
  );

  return routes;
};
