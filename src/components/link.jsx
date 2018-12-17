import React from "react";
import PropTypes from "prop-types";

import { scrollToElement } from "../helpers/scroll";

class Link extends React.Component {
	handleOnClick = () => {
		const { to, onClick } = this.props;
		scrollToElement(to);
		if (onClick) {
			onClick();
		}
	};

	render() {
		return (
			<div onClick={this.handleOnClick}>
				{this.props.children}
			</div>
		);
	}
}

ScrollElement.prototypes = {
	to: PropTypes.string,
	onClick: PropTypes.func,
};

export { Link };
