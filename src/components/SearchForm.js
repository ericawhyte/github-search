import React, { Component } from 'react';
import styles from '../styles/SearchForm.module.scss';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchTerm(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e, term) {
    e.preventDefault();

    this.props.setSearchTerm(term);
  }
  
  render() {
    console.log("searchForm component: " + this.state.searchTerm);
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
}
