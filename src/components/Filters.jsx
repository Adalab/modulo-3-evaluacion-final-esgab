import PropTypes from "prop-types";

import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";
import FiltersReset from "./FiltersReset";

function Filters({ handleFilterCharacter, handleClickReset, valueName, valueHouse, valueGender}) {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <FilterName 
        handleFilterCharacter={handleFilterCharacter}
        valueName={valueName}
      />
      <FilterHouse
        handleFilterCharacter={handleFilterCharacter}
        valueHouse={valueHouse}
      />
      <FilterGender 
        handleFilterCharacter={handleFilterCharacter}
        valueGender={valueGender}
      />
      <FiltersReset 
        handleClickReset={handleClickReset}
      /> 
    </form>
  );
}

Filters.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  valueHouse: PropTypes.string.isRequired,
  valueGender: PropTypes.string.isRequired,
};

export default Filters;
