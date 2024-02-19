import PropTypes from "prop-types";

function FilterName({ handleFilterCharacter, valueName }) {

  const handleInputName = (event) => {
    handleFilterCharacter("name", event.currentTarget.value);
  };

  return (
    <fieldset className="filters__name name">
      <label className="name__label" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="input"
        type="text"
        name="name"
        id="name"
        placeholder="Ej: Harry Potter"
        onInput={handleInputName}
        value={valueName}
      />
    </fieldset>
  );
}

FilterName.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default FilterName;
