import React from 'react';
import Player from './players/Player';
import StopWatch from "./Watch";

class Scoreboard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:"",
			players:[]
		};
		this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddPlayer = this.handleAddPlayer.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}
	//increment or decrement player score
	handleScoreUpdate(index, val){
		let newPlayers = this.state.players.slice();
		newPlayers[index].score += val;
		// sort the players based on score
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({players: newPlayers});
	}
	// gets input value and update the state with new input
	handleChange(event) {
		this.setState({name: event.target.value});
	}
	// add new player
	handleAddPlayer(e){
		let name = this.state.name;
		let newPlayers = [...this.state.players, {name:name, score:0}];
		// sort the newPlayers
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({players:newPlayers});
		e.preventDefault();
	}
	// handle removing player
	handleRemove(index){
		let newPlayers = this.state.players;
		newPlayers.splice(index, 1);
		newPlayers.sort((a,b) => b.score - a.score);
		this.setState({players:newPlayers});
	}

	render(){
		// let appState = JSON.stringify(this.state);
		// sessionStorage.setItem("state", appState);
		return(
			<div className="scoreboard">
				<this.header title={"scoreboard"} players={this.state.players} />
				<div className="players">
					{
						this.state.players.map( (player, index) => <Player name={player.name} score={player.score}
							key={index} increment={() => this.handleScoreUpdate(index,1)}
							decrement={() => this.handleScoreUpdate(index,-1)}
							remove={() => this.handleRemove(index)}
						/>)
					}

					<this.AddPlayerForm  />
					<h1>{this.state.name}</h1>
				</div>

			</div>

		);
	}

	AddPlayerForm = (props)=>{
		return(
			<div className="add-player-form">
				<form>
					<input type="text" value={this.state.name} onChange={this.handleChange}/>
					<input type="submit" onClick={this.handleAddPlayer}/>
				</form>
			</div>
		);
	}

	header(props){
		let totalPlayers = props.players.length;
		let totalPoint = props.players.reduce((points, player)=> points + player.score, 0);
		return(
			<div className="header">
				<h1>{props.title}</h1>
				<table className="stats">
					<tbody>
						<tr><td>Players:</td><td>{totalPlayers}</td></tr>
						<tr><td>Total Points:</td><td>{totalPoint}</td></tr>
					</tbody>
				</table>
				<StopWatch />

			</div>
		);
	}

}


export default Scoreboard;
