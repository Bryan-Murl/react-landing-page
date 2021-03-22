import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card h-100 w-100">
			<img src={props.imgSrc} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
	imgSrc: PropTypes.string
};

export default Card;
