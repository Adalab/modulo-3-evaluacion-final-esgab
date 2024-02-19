import PropTypes from "prop-types";

function FiltersReset({ handleClickReset }) {

  return (
    <button className="filters__reset" onClick={handleClickReset}>
      <i className="fa-solid fa-rotate-left"></i>
    </button>
  );
}

FiltersReset.propTypes = {
  handleClickReset: PropTypes.func.isRequired,
};

export default FiltersReset;