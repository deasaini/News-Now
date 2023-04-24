import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
	return (
		<div>
			<nav className="navbar">
				<div>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/business">
								Business
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/entertainment">
								Entertainment
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/health">
								Health
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/sports">
								Sports
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
