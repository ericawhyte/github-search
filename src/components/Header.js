import React, { Component } from 'react';
import styles from '../styles/Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <a href="#main" className={styles.sr}>Skip to main content</a>
        <h1>Github Repo Search</h1>
      </header>
    );
  }
}
