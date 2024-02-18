import { useState, useEffect } from "react";

import logo from "../images/Harry_Potter_wordmark.svg";

import CharacterList from "./CharacterList";
import Filters from "./Filters";

import "../scss/App.scss";

import { fetchCharacters } from "../services/fetch";

function App() {

  const [data, setData] = useState([]);
  const [dataFilters, setDataFilters] = useState({
    name: "",
    house: "Gryffindor",
  });

  useEffect(() => {
    fetchCharacters().then((responseData) => {
      
      setData(responseData);
    });
  }, []);

  const handleFilterCharacter = (filter, value) => {
    setDataFilters({ ...dataFilters, [filter]: value });
  }

  const filteredCharacters = data
  .filter((character) =>
    character.name.toLowerCase().includes(dataFilters.name.toLowerCase())
  )
  .filter((character) => {
    if (dataFilters.house === "All") {
      return true;
    } else {
      return character.house === dataFilters.house;
    }
  });

  return (
  <div className="container">
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Harry Potter" />
    </header>
    <main className="main">
      <section className="main__filters">
        <Filters 
          handleFilterCharacter={handleFilterCharacter}
          valueName={dataFilters.name}
          valueHouse={dataFilters.house}
        />
      </section>
      <section className="main__characters">
        <CharacterList data={filteredCharacters} />
      </section>
    </main>
    <footer className="footer">
      <small className="footer__copy"></small>
    </footer>
  </div>
  );

}

export default App;
