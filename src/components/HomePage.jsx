import PropTypes from "prop-types";

import Filters from "./Filters";
import CharacterList from "./CharacterList";


function HomePage({ handleFilterCharacter, handleClickReset, valueName, valueHouse, valueGender, data }) {

  return (
    <>
      <section className="main__filters">
        <Filters
          handleFilterCharacter={handleFilterCharacter}
          handleClickReset={handleClickReset}
          valueName={valueName}
          valueHouse={valueHouse}
          valueGender={valueGender}
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
  valueGender: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default HomePage;