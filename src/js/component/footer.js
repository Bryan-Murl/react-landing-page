import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="footer mt-3 py-5 bg-dark">
			<div className="container text-center">
				<span className="text-muted">{props.footerDescription}</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	footerDescription: PropTypes.string
};

export default Footer;
