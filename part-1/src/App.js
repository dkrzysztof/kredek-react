import React, { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

function App() {
	const [data, setData] = useState([{ checked: false, task: 'Zadanie 1' }]);
	const [task, setTask] = useState('');

	useEffect(() => {
		document.title = 'Ilość zadań ' + data.length;
		console.log('Update - data');
	}, [data]); // <-  lista dependencji

	useEffect(() => {
		console.log('ComponentDidMount');
	}, []);

	const handleInput = function (event) {
		setTask(event.target.value);
	};
	const handleClick = function () {
		//spread operator ...
		// const newData = [...data];
		// newData.push(newText);

		setData([...data, { checked: false, task: task }]);
	};

	const handleChange = function (index) {
		return (event) => {
			const newData = [...data];
			newData[index].checked = event.target.checked;
			setData(newData);
		};
	};

	const handleDelete = function (index) {
		return () => {
			const newData = data.filter((element, i, arr) => {
				return i !== index;
			});
			setData(newData);
		};
	};

	console.log('render...');
	return (
		<div className='App'>
			<header className='App-header'>Witaj Kredek!</header>
			<div>
				<input className='input' placeholder='Tutaj wpisz cokolwiek...' onInput={handleInput} />
				<button className='btn' onClick={handleClick}>
					Dodaj zadanie
				</button>
				<div className='container'>
					{data.map(function (elementFromTable, index) {
						return (
							<Card
								key={index}
								id={index}
								checked={elementFromTable.checked}
								onChange={handleChange(index)}
								onDelete={handleDelete(index)}
								task={elementFromTable.task}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
