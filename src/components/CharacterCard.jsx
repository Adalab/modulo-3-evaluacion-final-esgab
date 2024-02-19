import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import gryffindor from "../images/house-gryffindor.jpg";
import hufflepuff from "../images/house-hufflepuff.jpg";
import ravenclaw from "../images/house-ravenclaw.jpg"
import slytherin from "../images/house-slytherin.jpg";
import defaultPhoto from "../images/no-image.jpg";


function CharacterCard({ character }) {

  const { name, house, image, ancestry } = character;

  const houseShield = {
    Gryffindor: gryffindor,
    Hufflepuff: hufflepuff,
    Ravenclaw: ravenclaw,
    Slytherin: slytherin,
  };

  return (
    <Link to={`/personaje/${name.toLowerCase().replace(" ", "-")}/${ancestry}`}>
      <article className="character">
        <img
          className="character__image"
          src={image || houseShield[house] || defaultPhoto}
          alt={`Imagen del personaje ${name}`}
        />
        <h3 className="character__name">{name}</h3>
        <p className="character__house">{house}</p>
      </article>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
