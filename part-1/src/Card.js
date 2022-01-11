import React from 'react';

function Card(props) {
	// id
	// checked
	// onChange
	// onDelete
	// task
	return (
		<>
			<div className='card' key={props.id}>
				<input type='checkbox' value={props.checked} onChange={props.onChange} />
				<div className={props.checked ? 'text-strike' : ''}>{props.task}</div>
				<button className='btn' onClick={props.onDelete}>
					X
				</button>
			</div>
		</>
	);
}

export default Card;
