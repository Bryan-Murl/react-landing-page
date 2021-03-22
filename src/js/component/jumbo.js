import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div className="jumbotron container">
			<h1 className="display-4 mt-5">{props.headline}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonUrl}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbo.propTypes = {
	headline: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

export default Jumbo;
