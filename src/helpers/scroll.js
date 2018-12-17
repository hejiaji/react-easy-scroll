import { UAParser } from "ua-parser-js";

const parser = new UAParser();

const isInIEBrowser = () => {
	return parser.getBrowser().name === "IE";
};

let elementMaps = {};

export const registerElement = (element, id) => {
	elementMaps = {
		...elementMaps,
		[id]: element,
	};
};

export const scrollToElement = (id) => {
	const element = elementMaps[id];
	if (!element) {
		return;
	}
	const eleRect = element.getBoundingClientRect();
	const offsetTop = eleRect.top + window.pageYOffset - 60;
	if (isInIEBrowser()) {
		window.scrollTo(0, offsetTop);
	} else {
		window.scrollTo({
			top: offsetTop,
			behavior: "smooth",
		});
	}
};
