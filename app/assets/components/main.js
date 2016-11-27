import React from "react";
import ReactDom from "react-dom";

require("@blueprintjs/core/dist/blueprint.css");

class App extends React.Component {
	render() {
		return <h1>Hello App</h1>;
	}
};

ReactDom.render(<App/>, document.getElementById("app-root"));