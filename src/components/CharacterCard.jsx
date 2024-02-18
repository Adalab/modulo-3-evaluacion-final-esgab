import PropTypes from "prop-types";

import gryffindor from "../images/house-gryffindor.jpg";
import hufflepuff from "../images/house-hufflepuff.jpg";
import ravenclaw from "../images/house-ravenclaw.jpg"
import slytherin from "../images/house-slytherin.jpg";
import defaultPhoto from "../images/no-image.jpg";


function CharacterCard({ character }) {
  const { image, name, house, species } = character;

  const houseShield = {
    Gryffindor: gryffindor,
    Hufflepuff: hufflepuff,
    Ravenclaw: ravenclaw,
    Slytherin: slytherin,
  };

  return (
    <article className="character">
      <img
        className="character__image"
        src={image || houseShield[house] || defaultPhoto}
        alt={`Imagen del personaje ${name}`}
      />
      <h3 className="character__name">{name}</h3>
      <p className="character__house">{house}</p>
      <p className="character__species">{species}</p>
    </article>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
