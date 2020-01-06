import React, { Component } from  'react';
import styles from '../styles/Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>copyright 2020</p>
      </footer>
    );
  }
}
