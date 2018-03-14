import React from 'react';
import Player from './players/Player';

let id = 0;
class Scoreboard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:"",
			players:[]
		};
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddPlayer = this.handleAddPlayer.bind(this);
	}
	//increment player score
	handleIncrement(id){
			let newState = this.state.players.map( function(player){
				if(player.id === id){
					console.log(player, "is the one");
					return player.score++;
				}else{
					console.log(player);
					return player;
				}
			}
		);
		this.setState({players: newState});
	}
	// gets input value
	handleChange(event) {
		this.setState({name: event.target.value});
		console.log(event.target.value);
	}
	// add new player
	handleAddPlayer(e){
		let name = this.state.name;
		let newState = [...this.state.players, {name:name, score:0, id:id++}]
		console.log(newState);
		this.setState({players:newState});
		console.log(id);
		e.preventDefault();
	}

	render(){
		return(
			<div className="scoreboard">
				<this.header title={"scoreboard"} />

				<div className="players">
					{
						this.state.players.map( player => <Player name={player.name} score={player.score}
							increment={() => this.handleIncrement(player.id)} key={player.id}
						/>)
					}

					<this.AddPlayerForm  />
					<h1>{this.state.value}</h1>
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
		return(
			<div className="header">
				<h1>{props.title}</h1>
			</div>
		);
	}

}


export default Scoreboard;
