import "./header.less";

export default function Header() {
	return(
		<div className="header__container">
			<div className="header__content">
				<div className="header__propic">
					<img className="header__image" src="/assets/patty.png" />
				</div>
				<div className="header__name">Patricia Masigla</div>
			</div>
		</div>
	)
};
