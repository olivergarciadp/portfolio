import { Link } from 'gatsby';
import React from 'react';
import './style-nav.scss';
import logo from '../../assets/logo.svg';

const Navigator = () => (
	<div className="navigator-bar">
		<div>
			<p className="logo">Oliver Garcia</p>
		</div>
		<div>
			<ul className="navigator">
				<li>
					<Link to="/porfolio" activeClassName="active">
						<a href="#">Portfolio</a>
					</Link>
				</li>
				<li>
					<Link to="/" activeClassName="active">
						<a href="#">About</a>
					</Link>
				</li>
				<li>
					<Link to="/" activeClassName="active">
						<a href="#">Contact Me</a>
					</Link>
				</li>
			</ul>
		</div>
	</div>
);

export default Navigator;
