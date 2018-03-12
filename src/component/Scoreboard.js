import React from 'react';
import Player from './players/Player';

class Scoreboard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			score:0
		};
		this.incrementHandler = this.incrementHandler.bind(this);
	}

	incrementHandler(){
		this.setState((prevState, props) =>{
			return {score:prevState.score +1}
		});
	}


	header(props){
		return(
			<div className="header">
				<h1>{props.title}</h1>
			</div>
		);
	}

	render(){
		return(
			<div className="scoreboard">

				<this.header title={"scoreboard"} />

				<div className="players">

					<Player name ={"HELL WORLD!"} increment={this.incrementHandler} score={this.state.score}/>
					<Player name ={"jay"} increment={this.incrementHandler} score={this.state.score}/>
					<Player name ={"adam"} increment={this.incrementHandler} score={this.state.score}/>
					<Player name ={"sam"} increment={this.incrementHandler} score={this.state.score}/>
					<AddPlayerForm />

				</div>

			</div>

		);
	}

}


const AddPlayerForm = (props)=>{
	return(
		<div className="add-player-form">
			<form>
				<input type="text" />
				<input type="submit" />
			</form>
		</div>
	);
}

export default Scoreboard;
