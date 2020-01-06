import React, { Component } from 'react';
import styles from '../styles/SearchForm.module.scss';
import autobind from 'autobind';

@autobind;
export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit() {
    
  }
  
  render() {
    return (
      <form className={styles.search} onSubmit="">
        <label className={styles.label} htmlFor="github-search">Search Github</label>
        <input className={styles.input} type="search" name="search" id="github-search" placeholder="search for github user" />
        <button className={styles.button} type="submit">Search</button>
      </form>
    );
  }
}
