import ReactDOM from "react-dom";
import React from 'react';
import Root from "./root";
import { createHistory } from "history";

ReactDOM.render(
	<Root history={ createHistory() } />,
	document.getElementById("app")
);
