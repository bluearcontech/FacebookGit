import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { GoRepoForked, GoStar, GoGitBranch, GoPerson } from 'react-icons/lib/go';

import { fetchRepositoryByIdAction } from '../../actions/repository';
import {
  fetchRepositoryLanguageAction,
  fetchRepositoryCommitsAction,
  fetchRepositoryBranchesAction,
  fetchRepositoryContributorsAction,
  fetchRepositoryTopicsAction,
} from '../../actions/repository';

import './Repository.css';

type Props = {
  repoInfo: object,
  match: object,
  repository: object,
  languages: [],
  topics: [],
  branches: [],
  contributors: [],
  fetchRepositoryByIdAction: () => void,
  fetchRepositoryLanguageAction: () => void,
  fetchRepositoryCommitsAction: () => void,
  fetchRepositoryBranchesAction: () => void,
  fetchRepositoryContributorsAction: () => void,
  fetchRepositoryTopicsAction: () => void,
};

// eslint-disable-next-line
class Repository extends React.Component<Props, void> {
  constructor(props) {
    super(props);
    const repository =
      _.isEmpty(props.repoInfo) === false
        ? props.repoInfo.items.find(r => r.id.toString() === props.match.params.id)
        : {};
    this.state = { repository };
  }

  componentDidMount() {
    if (_.isEmpty(this.state.repository) === false) {
      this.props.fetchRepositoryBranchesAction(`${this.state.repository.url}/branches`);
      this.props.fetchRepositoryContributorsAction(`${this.state.repository.url}/stats/contributors`);
      this.props.fetchRepositoryCommitsAction(`${this.state.repository.url}/commits`);
      this.props.fetchRepositoryTopicsAction(`${this.state.repository.url}/topics`);
    } else {
      this.props.fetchRepositoryByIdAction(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.repository !== newProps.repository &&
      _.isEmpty(newProps.repository) === false &&
      _.isEmpty(this.state.repository) === true
    ) {
      this.setState({ repository: newProps.repository });
      this.props.fetchRepositoryBranchesAction(`${newProps.repository.url}/branches`);
      this.props.fetchRepositoryContributorsAction(`${newProps.repository.url}/stats/contributors`);
      this.props.fetchRepositoryCommitsAction(`${newProps.repository.url}/commits`);
      this.props.fetchRepositoryTopicsAction(`${newProps.repository.url}/topics`);
    }
  }

  render() {
    const { repository } = this.state;
    const { topics, branches, contributors } = this.props;

    if (_.isEmpty(repository)) {
      return <h3>This repository does not exist</h3>;
    }

    return (
      <div className="main">
        <div className="header">
          <h2 className="title">{repository.full_name}</h2>
          <div className="count-info">
            <span>
              <GoStar />
              {repository.stargazers_count}
            </span>
            <span>
              <GoRepoForked />
              {repository.forks}
            </span>
            <span>
              <GoGitBranch />
              {branches.length}
            </span>
          </div>
        </div>

        <div className="meta-content">
          <span className="description">{repository.description}</span>
          <span>
            <a href={repository.homepage}>{repository.homepage}</a>
          </span>
        </div>
        <div>
          {topics.map((topic, index) => (
            <span key={index} className="topic-tag">
              {topic}
            </span>
          ))}
        </div>
        <div className="con-list">
          <div>
            <GoPerson /> Contributors
          </div>
          {contributors.map((contributor, index) => (
            <div key={index} className="con-wrapper">
              <img className="con-image" src={contributor.author.avatar_url} />
              <div className="con-name-warpper">
                <h3 className="con-name">{contributor.author.login}</h3>
                <span className="con-commits">{contributor.total} commits</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repoInfo: state.repos.repoInfo,
  repository: state.repository.detail,
  languages: state.repository.languages,
  branches: state.repository.branches,
  commits: state.repository.commits,
  contributors: state.repository.contributors,
  topics: state.repository.topics,
});

const mapDispatchToProps = {
  fetchRepositoryByIdAction,
  fetchRepositoryLanguageAction,
  fetchRepositoryCommitsAction,
  fetchRepositoryBranchesAction,
  fetchRepositoryContributorsAction,
  fetchRepositoryTopicsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repository);
