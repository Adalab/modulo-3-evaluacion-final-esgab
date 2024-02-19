import PropTypes from "prop-types";

function FilterHouse({ handleFilterCharacter, valueHouse }) {

  const handleInputHouse = (event) => {
    handleFilterCharacter("house", event.currentTarget.value);
  };

  return (
    <fieldset className="filters__houses houses">
    <label htmlFor="houses__label">Selecciona la casa:</label>
    <select
      className="select"
      name="houses__select"
      onInput={handleInputHouse}
      value={valueHouse}
    >
      <option className="houses__option" value="All">Todas</option>
      <option className="houses__option" value="Gryffindor">Gryffindor</option>
      <option className="houses__option" value="Ravenclaw">Ravenclaw</option>
      <option className="houses__option" value="Hufflepuff">Hufflepuff</option>
      <option className="houses__option" value="Slytherin">Slytherin</option>
    </select>
  </fieldset>
  );
}

FilterHouse.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  valueHouse: PropTypes.string.isRequired,
};

export default FilterHouse;