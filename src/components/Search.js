import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: ''
    };

    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  setSearchTerm(term) {
    this.setState({searchTerm: term});
  }

  render() {
  console.log(this.state.searchTerm);
    return (
      <Fragment>
        <SearchForm setSearchTerm={this.setSearchTerm} />
        <SearchResults searchTerm={this.state.searchTerm} />
      </Fragment>
    );
  }
}