import React from "react";
import PropTypes from "prop-types";

import { registerElement } from "../helpers/scroll";

class ScrollElement extends React.Component {
	render() {
		return (
			<div ref={element => registerElement(element, this.props.id)}>
				{this.props.children}
			</div>
		);
	}
}

ScrollElement.prototypes = {
	id: PropTypes.string,
};

export { ScrollElement };
