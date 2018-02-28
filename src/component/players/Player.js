import React from 'react';

const PlayerRow = (props) =>{
	const {name, score} = props;
	return(
		<div className="player">
			<div className="player-name">{name}</div>
			<div className="player-score">

				<div className="counter">
					<button className="counter-action decrement">-</button>
					<div className="counter-score">{score}</div>
					<button className="counter-action increment">+</button>
				</div>

			</div>
		</div>
	);
}


const Player = (props) =>{
	return(
		<div>

			<PlayerRow name={props.name} score={props.score}/>

		</div>

	);
}

export default Player;
