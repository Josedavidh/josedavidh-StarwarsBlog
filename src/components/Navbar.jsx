import { Link } from "react-router-dom";
import starwarsLogo from "../assets/img/logo_starwars.png";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	const { favorites } = store

	return (
		<nav className="navbar navbar-light bg-light py-4">
			<div className="container">
				<Link to="/">
					<img
						src={starwarsLogo}
						alt="Star Wars Logo"
						className="navbar-brand logo_height"
					/>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle d-flex align-items-center gap-2"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites
						<span className="counter-badge">{favorites.length}</span>
					</button>

					<ul className="dropdown-menu dropdown-menu-end">
						{
							favorites.length > 0 ? (
								favorites.map((item) => (

									<li key={item._id}
										className="d-flex align-items-center justify-content-between px-3 mb-2">
										<Link
											to={`/${item.group}/${item._id}`}
											className='dropdown-item'
										>
											{item.properties?.name || "Unnamed"}
										</Link>
										<button
											className="btn ms-2"
											onClick={(e) => {
												e.stopPropagation()
												dispatch({
													type: 'REMOVE_FAVORITE',
													payload: item._id,
												})
											}}
										>
											<i class="fa-solid fa-trash"></i>
										</button>
									</li>

								))
							) : (
								<li>
									<span className="dropdown-item d-flex justify-content-center">EMPTY</span>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};