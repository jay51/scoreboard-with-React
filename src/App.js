import React, { Component } from 'react';
import Scoreboard from './component/Scoreboard';
import './App.css';

class App extends Component {

  render() {
    return (
    <div className="App">
    
      <header className="App-header">
        <h1 className="App-title">Score Tracker</h1>
      </header>

		  <Scoreboard/>

    </div>
    );
  }
}

export default App;
