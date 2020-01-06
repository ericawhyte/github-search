import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
