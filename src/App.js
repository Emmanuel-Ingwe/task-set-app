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

	const deleteTasks = (id) => {
		setTask(task.filter((tasks) => tasks.id !== id));
	};

	const toggleReminder = (id) => {
		setTask(
			task.map((tasks) =>
				tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks
			)
		);
	};

	return (
		<div className='container'>
			<Header />
			{task.length > 0 ? (
				<Task task={task} onDelete={deleteTasks} onToggle={toggleReminder} />
			) : (
				"No Tasks To Show"
			)}
		</div>
	);
};

export default App;
