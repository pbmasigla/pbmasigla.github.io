import "./header.less";
import classnames from "classnames";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			doingEffect: false,
			hoverNumber: 0,
			showWarning: false,
			name: "Patricia Masigla"
		};
		this.setRandomName = this.setRandomName.bind(this);
		this.increaseHoverNum = this.increaseHoverNum.bind(this);
	}

	randomLetter() {
		const possibleVals = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
		let possibleValsArray = possibleVals.split("");
		const randomCharacter = possibleValsArray.charAt
	}

	setRandomName(index, randomName) {
		var self = this;
		setTimeout( function() {
			self.setState({ name: randomName });
		}, index * 70 );
	}

	nameAnimation() {
		this.setState({ doingEffect: true });
		const possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
		const name  = "Patricia Masigla";
		let randomName = "";

		name.split("").forEach((letter1, i) => {
			randomName = name.substring(0, i + 1);
			name.split("").forEach((letter2, j) => {
				if (j > i) {
					randomName += possible.charAt(Math.floor(Math.random() * possible.length));
				}
			});
			this.setRandomName(i, randomName);
			randomName = "";
		});

		const self = this;
		setTimeout(() => {
			self.setState({
				doingEffect: false
			});
		}, 1000);
	}

	increaseHoverNum() {
		const hoverNumber = this.state.hoverNumber + 1;
		const showWarning = hoverNumber % 3 === 0 && hoverNumber > 0;
		this.setState({ hoverNumber, showWarning });

		if (showWarning) {
			let self = this;
			setTimeout(() => {
				self.setState({
					showWarning: false
				});
			}, 2000);
		}
	}

	handleHover() {
		this.nameAnimation();
		this.increaseHoverNum();
	}

	render() {
		const headerLeftClass = classnames("header__left", {
			"header__left--in-action": this.state.doingEffect
		});

		let warning;
		if (this.state.showWarning) {
			warning = (
				<div className="header__warning-container">
					<div className="header__triangle"></div>
					<div className="header__warning">Stop! I'm getting dizzy</div>
				</div>
			);
		}

		return(
			<div className="header__container">
				<div className={ headerLeftClass } onMouseEnter={ () => this.handleHover() }>
					<div className="header__propic">
						<img className="header__image" src="/assets/patty.png" />
					</div>
					<div className="header__name">{ this.state.name }</div>
				</div>

				<div className="header__right">
					<div className="header__description">
						<span> Pun Person /</span>
						<span> Developer /</span>
						<span> Engineer</span>
					</div>
				</div>
				{ warning }
			</div>
		);
	}
}
