import { FaTimes } from "react-icons/fa";

const Tasks = ({ tasks }) => {
    return (
        <div className="event">
            <h3>{tasks.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} /></h3>
            <p>{tasks.day}</p>
        </div>
    );
};

export default Tasks;