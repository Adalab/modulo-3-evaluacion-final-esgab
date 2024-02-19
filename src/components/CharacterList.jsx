import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";
import MessagePage from "./MessagePage";

import "../scss/CharacterList.scss";

function CharacterList({ data, valueName }) {

  let html;

  if (data && data.length > 0) {
    html = (
      <ul className="characters__list">
        {data.map(character => (
          <li className="character__item" key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    );
  } 

  else if (valueName){
    html = <MessagePage text={`No hay ningún personaje que coincida con la palabra ${valueName}`}/>;
  }

  return html;


}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default CharacterList;