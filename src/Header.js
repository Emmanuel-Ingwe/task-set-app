import PropTypes from "prop-types";

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<button className='btn'>Add</button>
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string,
};

// const headStyle = {
// 	color: "blue",
// 	background: "pink",
// };

export default Header;
