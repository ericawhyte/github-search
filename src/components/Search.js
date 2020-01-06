import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <Fragment>
        <SearchForm />
        <SearchResults />
      </Fragment>
    );
  }
}