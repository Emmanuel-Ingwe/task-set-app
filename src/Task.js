import Tasks from "./Tasks";

const Task = ({ task }) => {
    return (
        <>
            {task.map((tasks) => (
                <Tasks key={tasks.id} tasks={tasks} />
            ))}
        </>
    );
};

export default Task;