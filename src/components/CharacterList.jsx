import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";

function CharacterList({ data }) {

  const renderCharacters = 
    data.map(character => (
      <li className="character__item" key={character.id}>
        <CharacterCard character={character} />
      </li>
    ));

  return (
    <ul className="character__list">{renderCharacters}</ul>
  );
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CharacterList;