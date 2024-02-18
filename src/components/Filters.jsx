function Filters() {

  return (
    <form className="filters">
    <fieldset className="filters__name name">
      <label 
        className="name__label" 
        htmlFor="name">
        Busca por personaje:
      </label>
      <input 
        className="name__input"
        type="text"
        name="name"
        id="name"
        placeholder="Ej: Harry Potter"
      />
    </fieldset>
    <fieldset className="filters__houses houses">
      <label htmlFor="houses__label">Selecciona la casa:</label>
      <select name="houses__select">
        <option className="houses__option" value="All">Todas</option>
        <option className="houses__option" value="Gryffindor">Gryffindor</option>
        <option className="houses__option" value="Ravenclaw">Ravenclaw</option>
        <option className="houses__option" value="Hufflepuff">Hufflepuff</option>
        <option className="houses__option" value="Slytherin">Slytherin</option>
      </select>
    </fieldset>
    <button className="filters__reset">Reset</button>
  </form>
  );

}

export default Filters;