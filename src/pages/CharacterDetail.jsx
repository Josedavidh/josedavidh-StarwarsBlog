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
                    <p><span>Birth Year</span><br />{detail.properties.birth_year}</p>
                    <p><span>Gender</span><br />{detail.properties.gender}</p>
                    <p><span>Height</span><br />{detail.properties.height}</p>
                    <p><span>Skin</span><br />{detail.properties.skin_color}</p>
                    <p><span>Eye Color</span><br />{detail.properties.eye_color}</p>
                </div>
            </div>
        </div>
    );
};
