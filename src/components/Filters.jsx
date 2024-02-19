import PropTypes from "prop-types";

function Filters({ handleFilterCharacter, handleClickReset, valueName, valueHouse, valueGender }) {

  const handleInputName = (event) => {
    handleFilterCharacter("name", event.currentTarget.value);
  };

  const handleInputHouse = (event) => {
    handleFilterCharacter("house", event.currentTarget.value);
  };

  const handleInputGender = (event) => {
    handleFilterCharacter("gender", event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="filters" onSubmit={handleSubmit}>
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
      <fieldset className="filters__houses houses">
        <label htmlFor="houses__label">Selecciona la casa:</label>
        <select
          className="select"
          name="houses__select"
          onInput={handleInputHouse}
          value={valueHouse}
        >
          <option className="houses__option" value="All">
            Todas
          </option>
          <option className="houses__option" value="Gryffindor">
            Gryffindor
          </option>
          <option className="houses__option" value="Ravenclaw">
            Ravenclaw
          </option>
          <option className="houses__option" value="Hufflepuff">
            Hufflepuff
          </option>
          <option className="houses__option" value="Slytherin">
            Slytherin
          </option>
        </select>
      </fieldset>
      <fieldset className="filters__check check">
        <input 
          type="radio" 
          id="hombre" 
          name="gender"
          value="male"
          checked={valueGender === "male"}
          onChange={handleInputGender}
        />
        <label className="check__label" htmlFor="hombre">Hombre</label>
        <input 
          type="radio" 
          id="mujer" 
          name="gender"
          value="female"
          checked={valueGender === "female"}
          onChange={handleInputGender} 
        />
        <label className="check__label" htmlFor="mujer">Mujer</label>
      </fieldset>
      <button className="filters__reset" onClick={handleClickReset}>
        <i className="fa-solid fa-rotate-left"></i>
      </button>
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
