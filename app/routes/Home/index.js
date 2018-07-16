import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Pagination from 'material-ui-pagination';
import { GoRepoForked, GoStar } from 'react-icons/lib/go';
import { RingLoader } from 'react-spinners';
import 'bootstrap-less';
import { fetchRepositoriesRequestAction } from '../../actions/fetchRepositories';

import './Home.css';

type Props = {
  location: object,
  repoInfo: object,
  loading: Boolean,
  messages: Array,
  fetchRepositoriesRequestAction: () => void,
};

// eslint-disable-next-line
class Home extends React.Component<Props, void> {
  constructor(props) {
    super(props);
    this.state = {
      repositoryCount: _.isEmpty(props.repoInfo) ? 0 : props.repoInfo.items.length,
      repos: _.isEmpty(props.repoInfo) ? [] : props.repoInfo.items,
      activePage: 1,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    if (this.props.repoInfo !== newProps.repoInfo && _.isEmpty(newProps.repoInfo) === false) {
      const repositoryCount = newProps.repoInfo.total_count;
      this.setState({ repositoryCount, repos: newProps.repoInfo.items });
    }
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
    this.props.fetchRepositoriesRequestAction(pageNumber);
  };

  renderEmptyRepositoryLalbel = () => (
    <div className="main-body">
      <h2 className="header-label">Click Menu icon to view Facebook Projects</h2>
    </div>
  );

  renderStarCount = count => {
    if (count > 1000) {
      return `${(count / 1000).toFixed(1)} k`;
    }
    return count;
  };

  renderLoading = () => (
    <div className="main-body_loading">
      <RingLoader color={'#123abc'} loading={this.state.loading} />
    </div>
  );

  render() {
    const { repositoryCount, repos } = this.state;
    const { loading } = this.props;

    if (loading) {
      return this.renderLoading();
    }

    if (repositoryCount === 0) {
      return this.renderEmptyRepositoryLalbel();
    }

    return (
      <div className="main-body">
        <h2 className="repo-count-label">{repositoryCount} repository results</h2>
        <ul className="repo-list">
          {repos &&
            repos.map(repo => (
              <div className="repo-list-item" key={repo.id}>
                <h3 className="repo-list-item__title">
                  <Link to={`/repo/${repo.id}`}>{repo.full_name}</Link>
                </h3>
                <p className="repo-list-item__description">{repo.description}</p>
                <label className="repo-list-item__language">{repo.language ? repo.language : ' '}</label>
                <span className="repo-list-item__star">
                  <GoStar />
                  {this.renderStarCount(repo.stargazers_count)}
                </span>
                <span className="repo-list-item__fork">
                  <GoRepoForked />
                  {repo.forks}
                </span>
                Updated on {moment(repos.updated_at).format('YYYY-MM-DD')}
              </div>
            ))}
        </ul>
        <Pagination total={30} current={this.state.activePage} display={10} onChange={this.handlePageChange} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repoInfo: state.repos.repoInfo,
  loading: state.repos.loading,
  messages: state.repos.messages,
});

const mapDispatchToProps = {
  fetchRepositoriesRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
