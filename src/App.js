import React, { Component } from 'react';
import Scoreboard from './component/Scoreboard';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
	  	this.state = {
			value: '',
			score:0
	};

	  	this.handleChange = this.handleChange.bind(this);
	  	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	  this.setState({value: event.target.value});
	  console.log(event.target.value);
	}

	handleSubmit(event) {
	  alert('A name was submitted: ' + this.state.value);
	  event.preventDefault();

	}


  render() {
    return (
      <div className="App">

		<header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
	  	</p>

		<input type="text" onChange={this.handleChange} placeholder="player name"></input>
		<input type="submit" onClick={this.handleSubmit} placeholder="Add"></input>


		<Scoreboard/>

      </div>
    );
  }
}

export default App;
