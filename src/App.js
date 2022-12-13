import "./App.css";
import Header from "./Header";
import Task from "./Task";
import Footer from "./Footer";
import AddTask from "./AddTask";
import { useState } from "react";

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
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

	const addTask = (tasks) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...tasks };
		setTask({ ...task, newTask });
	};

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
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{task.length > 0 ? (
				<Task task={task} onDelete={deleteTasks} onToggle={toggleReminder} />
			) : (
				"No Tasks To Show"
			)}
			<Footer />
		</div>
	);
};

export default App;
