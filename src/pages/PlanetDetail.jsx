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
                <div className="col-12 col-md-6 col-lg-4 detail-image  d-flex justify-content-end">
                    <img
                        src={detail.image}
                        alt={detail.properties.name}
                        className="img-fluid img-detail"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 detail-text">
                    <h1 className="text-dark">{detail.properties.name}</h1>
                    <p>{detail.description}</p>
                </div>
                <div className="col-12 d-flex justify-content-between text-danger border-top border-danger py-3 detail-feature flex-wrap">
                    <p className="text-center"><span>Population</span><br />{detail.properties.population}</p>
                    <p className="text-center"><span>Name</span><br />{detail.properties.name}</p>
                    <p className="text-center"><span>Orbital Period</span><br />{detail.properties.orbital_period}</p>
                    <p className="text-center"><span>Rotation Period</span><br />{detail.properties.rotation_period}</p>
                    <p className="text-center"><span>Diameter</span><br />{detail.properties.diameter}</p>
                    <p className="text-center"><span>Climate</span><br />{detail.properties.climate}</p>
                </div>
            </div>
        </div>
    );
};
