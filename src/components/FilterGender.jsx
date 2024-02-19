import PropTypes from "prop-types";

function FilterGender({ handleFilterCharacter, valueGender }) {
  
  const handleInputGender = (event) => {
    handleFilterCharacter("gender", event.currentTarget.value);
  };

  return (
    <fieldset className="filters__check check">
      <input
        type="radio"
        id="hombre"
        name="gender"
        value="male"
        checked={valueGender === "male"}
        onChange={handleInputGender}
      />
      <label className="check__label" htmlFor="hombre">
        Hombre
      </label>
      <input
        type="radio"
        id="mujer"
        name="gender"
        value="female"
        checked={valueGender === "female"}
        onChange={handleInputGender}
      />
      <label className="check__label" htmlFor="mujer">
        Mujer
      </label>
    </fieldset>
  );
}

FilterGender.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  valueGender: PropTypes.string.isRequired,
};

export default FilterGender;
