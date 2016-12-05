import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from "./components/main";
import Secret from "./components/secret/secret";

export default function Root(props) {
	const { history } = props;
	return (
		<Router history={ history }>
			<Route path="/">
				<IndexRoute component={ Main } />
				<Route path="secret" component={ Secret } />
			</Route>
		</Router>
	);
}

Root.propTypes = {
	history: PropTypes.object.isRequired
};
