import "./terminal.less";
import terminalOptions from "./terminal-options";
import { List, Map } from "immutable";

const buildEntries = entries => {
	return entries.reduce((prev, curr, i) => {
		prev.push(
			<div key={`key_${i}`} className="terminal__entry ">
				<div className="terminal__entry-italic">pbmasigla.github.io:~ guest $ </div>
				{ curr.get("value") }
			</div>
		);
		if (!curr.get("isValid")) {
			prev.push(<div key={`key_error_${i}`} className="terminal__entry">{`-bash: ${curr.get("value")}: command not found`}</div>);
		}
		return prev;
	}, []);
};

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: List(),
			terminalInput: "",
			loggedOut: false
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.doOption = this.doOption.bind(this);
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.terminalInput).focus();
	}

	componentDidUpdate() {
		const terminalContent = ReactDOM.findDOMNode(this.refs.terminalContent);
		terminalContent.scrollIntoView();
	}

	handleOnChange(e) {
		this.setState({
			terminalInput: e.target.value
		});
	}

	handleKeyDown(e) {
		const terminalInput = this.state.terminalInput;
		if (e.keyCode === 13 && terminalInput !== "") {
			let isValid = false;
			if (terminalOptions[terminalInput.toLowerCase()]) {
				isValid = true;
				this.doOption(terminalOptions[terminalInput.toLowerCase()]);
			}
			const newEntries = this.state.entries.push(Map({
				value: terminalInput,
				isValid
			}));

			this.setState({
				entries: newEntries,
				terminalInput: ""
			});
		}
	}

	doOption(option) {
		if (option.type === "logout") {
			this.setState({ loggedOut: true });
		} else {
			window.open(option.value, "_blank");
		}
	}

	render() {
		const entries = buildEntries(this.state.entries);
		let terminalInputOrEnd = (
				<div className="terminal__input-container">
					<div className="terminal__input-label">pbmasigla.github.io:~ guest $</div>
					<input
						ref="terminalInput"
						value={ this.state.terminalInput }
						onKeyDown={ e => this.handleKeyDown(e) }
						onChange={ e => this.handleOnChange(e) }
						className="terminal__input"/>
				</div>
		);
		if (this.state.loggedOut) {
			terminalInputOrEnd =  <div className="terminal__goodbye">Have a good day!</div>;
		}

		return (
			<div className="terminal__container">
				<div className="terminal__header">
					<div className="terminal__welcome">Let's Get In Touch!</div>
					<div className="terminal__options">
						Options: email | resume | twitter | linkedin | github | logout
					</div>
				</div>

				<div className="terminal__content" ref="terminalContent">
					{ entries }
					{ terminalInputOrEnd }
				</div>
			</div>
		);
	}
};
