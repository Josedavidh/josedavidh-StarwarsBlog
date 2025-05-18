import { Link } from "react-router-dom";
import starwarsLogo from "../assets/img/logo_starwars.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light py-4">
			<div className="container">
				<Link to="/">
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
					<img
						src={starwarsLogo}
						alt="Star Wars Logo"
						className="navbar-brand logo_height"
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div class="dropdown d-flex flex-row">
							<button className="btn btn-primary dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
								<span className="counter-badge">3</span>
							</button>
							<ul className="dropdown-menu">
								<li><button className="dropdown-item" type="button">Action</button></li>
								<li><button className="dropdown-item" type="button">Another action</button></li>
								<li><button className="dropdown-item" type="button">Something else here</button></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};