import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from "./components/main";
import Secret from "./components/secret/secret";

export default class Root extends React.Component {
	render() {
		const { history } = this.props;
		return (
			<Router history={ history }>
				<Route path="/">
					<IndexRoute component={ Main } />
					<Route path="secret" component={ Secret } />
				</Route>
			</Router>
		);
	}
}

Root.propTypes = {
	history: PropTypes.object.isRequired
};
