import React, { Component } from 'react';
import styles from '../styles/SearchResults.module.scss';
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

console.log(GET_GITHUB_SEARCH);

export default class SearchResults extends Component {
  render() {
    return (
      <Query query={GET_GITHUB_SEARCH}>
        {({data, loading, error}) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error}</p>;

          let results = data.search.nodes[0];
          let repositories = results.repositories.nodes;
          console.log(repositories);
          return (
            <ul>
              {repositories.forEach((repository) => { 
                return (<li className={styles.searchItem}>
                      <div className={styles.left}>
                        <h2 className={styles.repoName}>{repository.name}</h2>
                        <h3 className={styles.userName}>{results.login}</h3>
                      </div>
                      <div className={styles.right}>
                        <p className={styles.stars}>Stars: {repository.stargazers.totalCount}</p>
                        <p className={styles.watchers}>Watchers: {repository.stargazers.totalCount}</p>
                        <p className={styles.languages}>Languages: HTML, CSS, JS</p>
                      </div>
                    </li>
                );
              })}
            </ul>
          );
        }}
      </Query>
    );
  }
}


