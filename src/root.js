import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import Main from "./components/main";

export default class Root extends React.Component {
	render() {
		const { history } = this.props;
		return (
			<Router history={ history }>
				<Route path="/" component={ Main } />
			</Router>
		);
	}
}

Root.propTypes = {
	history: PropTypes.object.isRequired
};
