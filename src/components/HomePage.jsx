import PropTypes from "prop-types";

import Filters from "./Filters";
import CharacterList from "./CharacterList";

function HomePage({ handleFilterCharacter, valueName, valueHouse, data }) {

  return (
    <>
      <section className="main__filters">
        <Filters
          handleFilterCharacter={handleFilterCharacter}
          valueName={valueName}
          valueouse={valueHouse}
        />
        </section>
        <section className="main__characters">
          <CharacterList data={data} />
        </section>
    </>
  );
}

HomePage.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  valueHouse: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default HomePage;