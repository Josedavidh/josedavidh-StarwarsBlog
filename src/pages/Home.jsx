import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const { characters, planets } = store
	const { }

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="the_carousel">
				{

					store.characters.map(() => (
						<div className="card card_shape" >
							<img
								src="https://i.pravatar.cc/250"
								className="card-img-top"
								alt="Imagen de ejemplo"
							/>
							<div className="card-body">
								<h5 className="card-title">Character</h5>
								<p className="card-text">
									Gender: male<br></br>
									Hair Color: blond<br></br>
									Eye-Color: blue

								</p>
								<a href="#" className="btn btn-outline-primary">Learn more!</a>
							</div>
						</div>
					))
				}




			</div>
		</div >
	);
}; 