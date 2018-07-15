import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

//components
import TreeCard from './components/TreeCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TreeCard></TreeCard>
      </div>
    );
  }
}

export default App;
