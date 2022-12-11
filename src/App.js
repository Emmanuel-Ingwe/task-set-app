import "./App.css";
import Header from "./Header";
import Task from "./Task";
import { useState } from "react";

const App = () => {
	const [task, setTask] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting at school",
			day: "Feb 6th at 1:30pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Food Shooping",
			day: "Feb 5th at 2:30pm",
			reminder: false,
		},
	]);
	return (
		<div className='container'>
			<Header title='Task Tracker' />
			<Task task={task} />
		</div>
	);
};

export default App;
