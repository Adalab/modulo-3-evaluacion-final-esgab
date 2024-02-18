import { useState, useEffect } from "react";

import logo from "../images/Harry_Potter_wordmark.svg";

import CharacterList from "./CharacterList";

import "../scss/App.scss";

import { fetchCharacters } from "../services/fetch";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCharacters().then((responseData) => {
      
      setData(responseData);
    });
  }, []);

  console.log(data);

  return (
  <div className="container">
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Harry Potter" />
    </header>
    <main className="main">
      <section className="main__filters">
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
      </section>
      <section className="main__characters">
        <CharacterList data={data} />
      </section>
    </main>
    <footer className="footer">
      <small className="footer__copy"></small>
    </footer>
  </div>
  );

}

export default App;
