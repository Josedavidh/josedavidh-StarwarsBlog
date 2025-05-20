import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const PlanetDetail = () => {
    const { store } = useGlobalReducer();
    const { planets } = store;
    const { planetId } = useParams(); // Usamos planetId para consistencia

    const [detail, setDetail] = useState(null);

    useEffect(() => {
        if (planets.length === 0) return;
        const planet = planets.find((item) => item._id === planetId);
        if (planet) {
            setDetail(planet);
        }
    }, [planetId, planets]);

    if (!detail) {
        return <div className="text-center mt-5 text-light">Loading planet details...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 detail-image">
                    <img
                        src={detail.image}
                        alt={detail.properties.name}
                        className="w-100"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 detail-text">
                    <h1 className="text-danger">{detail.properties.name}</h1>
                    <p>{detail.description}</p>
                </div>
                <div className="col-12 d-flex justify-content-between text-danger border-top border-danger py-3 detail-feature flex-wrap">
                    <p><span>Name</span><br />{detail.properties.name}</p>
                    <p><span>Climate</span><br />{detail.properties.climate}</p>
                    <p><span>Population</span><br />{detail.properties.population}</p>
                    <p><span>Orbital Period</span><br />{detail.properties.orbital_period}</p>
                    <p><span>Rotation Period</span><br />{detail.properties.rotation_period}</p>
                    <p><span>Diameter</span><br />{detail.properties.diameter}</p>
                </div>
            </div>
        </div>
    );
};
