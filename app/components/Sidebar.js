import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { menuAction } from '../actions/menu';
import { fetchRepositoriesRequestAction } from '../actions/fetchRepositories';

type Props = {
  history: object,
  open: boolean,
  menuAction: () => void,
  fetchRepositoriesRequestAction: () => void,
};

class Sidebar extends React.Component<Props, void> {
  constructor(props) {
    super(props);
  }

  goToListPage = () => {
    this.props.menuAction(!this.props.open);
    this.props.fetchRepositoriesRequestAction(1);
    this.props.history.push('/');
  };

  render() {
    return (
      <Drawer open={this.props.open} containerStyle={{ top: 64 }}>
        <MenuItem onClick={this.goToListPage}>Facebook</MenuItem>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  open: state.menu,
});

const mapDispatchToProps = {
  menuAction,
  fetchRepositoriesRequestAction,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Sidebar),
);
