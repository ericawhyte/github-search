import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import SearchResultItem from './components/SearchResultItem';
import Footer from './components/Footer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_GITHUB_SEARCH = gql`
  {
    search(query: "ericawhyte", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            repositories(first: 10) {
              totalCount
              nodes {
                watchers {
                  totalCount
                }
                languages(first: 10) {
                  nodes {
                    name
                  }
                }
                name
                stargazers {
                  totalCount
                }
              }
            }
            name
          }
        }
      }
    }
  }`

function App() {
  const { data, loading, error } = useQuery(GET_GITHUB_SEARCH);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <Header />
      <Search />
      <SearchResultItem />
      <Footer />
    </div>
  );
}

export default App;
