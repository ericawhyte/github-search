import React, { Component } from 'react';
import styles from '../styles/SearchForm.module.scss';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_GITHUB_SEARCH = gql`
  query GET_GITHUB_SEARCH {
    search(query: "ericawhyte", type: USER, first: 10) {
      repositoryCount
      nodes {
        ... on User {
          login
          name
          repositories(first: 20) {
            totalCount
            nodes {
              watchers {
                totalCount
              }
              stargazers {
                totalCount
              }
              name
              languages(first: 10) {
                nodes {
                  name
                }
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'ericawhyte'
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchTerm(e) {
    this.setState({searchTerm: e.target.value});
  }

  getResults() {
    const repos = ({searchTerm}) => (
        <Query query={GET_GITHUB_SEARCH} variables={{ searchTerm }}>
        {({data, loading, error}) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error}</p>;

          let results = data.search.nodes[0];
          let repositories = results.repositories.nodes;
          console.log(repositories);
          return repositories
        }}
      </Query>
    );
    return repos;
  }

  handleSubmit(e, term) {
    e.preventDefault();

    this.props.setSearchTerm(term);
    this.props.setSearchData(this.getResults);
  }
  
  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="github-search">Search Github</label>

        <input className={styles.input} type="search" name="search" id="github-search" placeholder="search for github user" value={this.state.searchTerm} onChange={this.updateSearchTerm} />

        <button className={styles.button} type="submit">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  setSearchData: PropTypes.func.isRequired
}
