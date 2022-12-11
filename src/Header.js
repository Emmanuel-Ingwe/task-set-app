import PropTypes from "prop-types";

const Header = ({ title }) => {
	return (
		<header>
			<h1>{title} Task Tracker</h1>
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
