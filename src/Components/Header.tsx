import React, { useState } from "react";
import { Link } from "react-router-dom";

//css
import "../Css/Header.css";

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header>
			<div className="h-wrap">
				<div className="h-top">
					<Link to="/juunj/">
						<h1 className="main-logo">Juun.J</h1>
					</Link>
				</div>
				<div className="h-bottom">
					<nav>
						<ul>
							<li>
								<Link to="/juunj/about/">ABOUT JUUN.J</Link>
							</li>
							<li>
								<Link to="/juunj/collection/">COLLECTIONS</Link>
							</li>
							<li>
								<Link to="/juunj/campaign/">CAMPAIGN</Link>
							</li>
							<li>
								<Link to="/juunj/project/">PROJECT</Link>
							</li>
							<li>
								<Link to="">STORES</Link>
							</li>
							<li>
								<Link to="">CONTACT</Link>
							</li>
							<li>
								<Link to="">FOLLOW US</Link>
							</li>
						</ul>
						<hr />
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
