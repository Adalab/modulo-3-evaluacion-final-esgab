import PropTypes from "prop-types";

import Filters from "./Filters";
import CharacterList from "./CharacterList";

function HomePage({ handleFilterCharacter, handleClickReset, valueName, valueHouse, data }) {

  return (
    <>
      <section className="main__filters">
        <Filters
          handleFilterCharacter={handleFilterCharacter}
          handleClickReset={handleClickReset}
          valueName={valueName}
          valueHouse={valueHouse}
        />
        </section>
        <section className="main__characters">
          <CharacterList 
            data={data} 
            valueName={valueName}
          />
        </section>
    </>
  );
}

HomePage.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  valueHouse: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default HomePage;