import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: 'ericawhyte',
      searchData: {}
    };

    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  setSearchTerm(term) {
    this.setState({searchTerm: term});
  }

  setSearchData(data) {
    this.setState({searchData: data});
  }

  render() {
    return (
      <Fragment>
        <SearchForm setSearchTerm={this.setSearchTerm} setSearchData={this.setSearchData} />
        <SearchResults searchTerm={this.state.searchTerm} />
      </Fragment>
    );
  }
}