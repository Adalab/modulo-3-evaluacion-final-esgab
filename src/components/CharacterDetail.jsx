import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import translation from "../services/translations";

import gryffindor from "../images/house-gryffindor.jpg";
import hufflepuff from "../images/house-hufflepuff.jpg";
import ravenclaw from "../images/house-ravenclaw.jpg";
import slytherin from "../images/house-slytherin.jpg";
import defaultPhoto from "../images/no-image.jpg";

function CharacterDetail({ getInfoCharacter }) {

  const { name, ancestry = "" } = useParams();

  const params = useParams();
  const characterInfo = getInfoCharacter(
    params.name.replace("-", " "),
    ancestry
  );

  const { image, alive, species, gender, house } = characterInfo;

  const houseImage = {
    Gryffindor: gryffindor,
    Hufflepuff: hufflepuff,
    Ravenclaw: ravenclaw,
    Slytherin: slytherin,
  };

  return (
    <div className="detail">
      <Link to={"/"}>
        <button className="detail__return">&#8656; Volver</button>
      </Link>
      <div className="detail__character">
        <article className="detail__article characterinfo">
          <div className="characterinfo__image-container">
            <img
              className="characterinfo___image"
              src={image || houseImage[house] || defaultPhoto}
              alt={`Imagen del personaje ${name}`}
            />
          </div>
          <div className="characterinfo__data">
            <h3 className="characterinfo__name">{characterInfo.name}</h3>
            <p> 
              <bold>Estatus: </bold>{(alive && gender === "male" ? "Vivo" : "Muerto") || (alive && gender === "female" ? "Viva" : "Muerta")}
              <ins>{(alive ? "Icono vivo" : "Icono muerto")}</ins>
            </p>
            <p>
              <bold>Especie: </bold>{translation[species][gender] || translation[species]} 
              <ins>{(species === "human" ? "Icono humano" : "Icono otra especie")}</ins>
            </p>
            <p>
              <bold>Género: </bold>{translation[gender]} 
              <ins>{(species === "male" ? "Icono hombre" : "Icono mujer")}</ins>
            </p>
            <p>
              <bold>Casa:</bold> {house}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  getInfoCharacter: PropTypes.func.isRequired
};

export default CharacterDetail;
