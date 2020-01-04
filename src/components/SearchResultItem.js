import React, { Component } from 'react';

export default class SearchResultItem extends Component {
  render() {
    return (
      <li>
        <h2>Repo Name</h2>
        <h3>User Name</h3>
        <p>Languages</p>
        <p>Stars</p>
        <p>Watchers</p>
      </li>
    );
  }
}
