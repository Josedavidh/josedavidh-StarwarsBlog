import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const CharacterDetail = () => {
    const { store } = useGlobalReducer();
    const { characters } = store;
    const { characterId } = useParams(); // Renombrado para mayor claridad

    const [detail, setDetail] = useState(null);

    useEffect(() => {
        if (characters.length === 0) return; // Espera a que los personajes estén cargados
        const character = characters.find((item) => item._id === characterId);
        if (character) {
            setDetail(character);
        }
    }, [characterId, characters]);

    if (!detail) {
        return <div className="text-center mt-5 text-light">Loading character details...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 detail-image d-flex justify-content-end">
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
                    <p className="text-center"><span>Name</span><br />{detail.properties.name}</p>
                    <p className="text-center"><span>Birth Year</span><br />{detail.properties.birth_year}</p>
                    <p className="text-center"><span>Gender</span><br />{detail.properties.gender}</p>
                    <p className="text-center"><span>Height</span><br />{detail.properties.height}</p>
                    <p className="text-center"><span>Skin</span><br />{detail.properties.skin_color}</p>
                    <p className="text-center"><span>Eye Color</span><br />{detail.properties.eye_color}</p>
                </div>
            </div>
        </div>
    );
};
