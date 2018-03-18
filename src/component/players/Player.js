import React from 'react';

const Player = (props) =>{
	const {name, score} = props;
	return(
		<div className="player">
			<div className="player-name">{name}</div>
			<div className="player-score">

				<div className="counter">
					<button onClick={props.decrement} className="counter-action decrement">-</button>
					<div className="counter-score">{score}</div>
					<button onClick={props.increment} className="counter-action increment">+</button>
				</div>
			</div>
		</div>
	);
}

export default Player;
