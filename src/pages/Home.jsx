import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const { characters, planets } = store;


	return (
		<div className="container">
			<div>
				<h1 className="text-danger">Characters</h1>
				<div className="the_carousel">
					{
						characters.map((character) => {
							const { properties, _id, image } = character

							return (
								<div className="card card_shape" key={_id}>
									<img
										src={image}
										className="card-img-top w-100"
										alt={properties.name}
									/>
									<div className="card-body">
										<h5 className="card-title">{properties?.name}</h5>
										<p className="card-text">
											Gender: {properties?.gender}
										</p>
										<p className="card-text">
											Hair Color: {properties?.hair_color}
										</p>
										<p className="card-text">
											Eye-Color: {properties?.eye_color}
										</p>
										<div className="card-footer-buttons">

											<Link
												to={`/people/${character._id}`}
												className="btn btn-outline-primary">
												Learn more!
											</Link>
											<button className="btn btn-outline-warning"
												onClick={() => {

													dispatch({
														type: "TOGGLE_FAVORITE",
														payload: character
													})
												}}>
												{store.favorites.some((fav) => fav._id == _id) ?
													<i className="fas fa-heart heart-icon"></i> :
													<i className="far fa-heart heart-icon"></i>
												}

											</button>
										</div>
									</div>
								</div>
							)
						})

					}
				</div>
			</div >

			<div className="container mt-4">
				<h1 className="text-danger mb-3">Planets</h1>
				<div className="the_carousel">
					{
						planets.map((planet) => {
							const { properties, _id, image } = planet;

							return (
								<div className="card card_shape" key={_id}>
									<img
										src={image}
										className="card-img-top w-100"
										alt={properties.name}
									/>
									<div className="card-body">
										<h5 className="card-title">{properties?.name}</h5>
										<p className="card-text">
											Population: {properties?.population}
										</p>
										<p className="card-text">
											Terrain: {properties?.terrain}
										</p>
										<div className="card-footer-buttons">

											<Link
												to={`/planet/${_id}`}
												className="btn btn-outline-primary">
												Learn more!
											</Link>
											<button className="btn btn-outline-warning"
												onClick={() => {

													dispatch({
														type: "TOGGLE_FAVORITE",
														payload: planet
													})
												}}>
												{store.favorites.some((fav) => fav._id == _id) ?
													<i className="fas fa-heart heart-icon"></i> :
													<i className="far fa-heart heart-icon"></i>
												}

											</button>
										</div>
									</div>
								</div>
							)
						})

					}
				</div>
			</div >
		</div>

	);
}; 