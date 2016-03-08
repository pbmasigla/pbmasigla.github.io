import "./main.less";
import Header from "./header/header";
import Terminal from "./terminal/terminal";
import Footer from "./footer/footer";

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Terminal />
				<Footer />
			</div>
		);
	}
};
