import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form>
        <label for="github-search">Search Github</label>
        <input type="search" name="search" id="github-search" placeholder="search for github user" />
        <button type="submit">Search</button>
      </form>
    );
  }
}