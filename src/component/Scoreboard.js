import React from 'react';
import Player from './players/Player';

class Scoreboard extends React.Component{
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
					{/* the value for this component is passed from the App class Component
						to this Component then passed to the player component and then to PlayerRow Component */}
					<Player name ={this.props.name} score={34}/>
					<Player name ={"jay"} score={43}/>

					<Player name ={"adam"} score={23}/>
					<Player name ={"sam"} score={12}/>

				</div>

			</div>

		);
	}

}


export default Scoreboard;
