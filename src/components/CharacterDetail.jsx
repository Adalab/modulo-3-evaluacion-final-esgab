import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import MessagePage from "./MessagePage";

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

  console.log(characterInfo)

  if (!characterInfo) {
    return <MessagePage text="El personaje que buscas no existe." />;
  }

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
        <button className="detail__return">
          <i className="fa-solid fa-reply"></i> Volver
        </button>
      </Link>
      <div className="detail__character">
        <article className="detail__article characterinfo">
          <div className="characterinfo__image-container">
            <img
              className="characterinfo__image"
              src={image || houseImage[house] || defaultPhoto}
              alt={`Imagen del personaje ${name}`}
            />
          </div>
          <div className="characterinfo__data">
            <h3 className="characterinfo__name">{characterInfo.name}</h3>
            <p className="characterinfo__text">
              <span className="bold">Estatus: </span>
              {gender === "male" && alive && "Vivo"}
              {gender === "male" && !alive && "Muerto"}
              {gender === "female" && alive && "Viva"}
              {gender === "female" && !alive && "Muerta"}
              <ins className="icon">
                {alive ? (
                  <i className="fa-solid fa-heart-pulse"></i>
                ) : (
                  <i className="fa-solid fa-skull"></i>
                )}
              </ins>
            </p>
            <p className="characterinfo__text">
              <span className="bold">Especie: </span>
              {translation[species][gender] || translation[species]}
              <ins className="icon">
                {species === "human" ? (
                  <i className="fa-solid fa-user-large"></i>
                ) : (
                  <i className="fa-solid fa-user-large-slash"></i>
                )}
              </ins>
            </p>
            <p className="characterinfo__text">
              <span className="bold">Género: </span>
              {translation[gender]}
              <ins className="icon">
                {gender === "male" ? (
                  <i className="fa-solid fa-mars"></i>
                ) : (
                  <i className="fa-solid fa-venus"></i>
                )}
              </ins>
            </p>
            <p className="characterinfo__text">
              <span className="bold">Ancestría: </span>
              {ancestry ? translation[ancestry][gender] || translation[ancestry] : "Desconocida"}
              <ins className="icon">
              {ancestry ? <i className="fa-solid fa-droplet"></i> : ""}
              </ins>
            </p>
            <p className="characterinfo__house">{house}</p>
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
