import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import logo from "../images/Harry_Potter_wordmark.svg";

import HomePage from "./HomePage";
import MessagePage from "./MessagePage";
import CharacterDetail from "./CharacterDetail";

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
      const sortedData = responseData.sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
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

  const getInfoCharacter = (characterName, characterAncestry) => {
    const characterFound = data.find(
      (character) => character.name.toLowerCase() === characterName.toLowerCase() && character.ancestry === characterAncestry
    );
    return characterFound;
  };

  return (
  <div className="container">
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Harry Potter" />
    </header>
    <main className="main">
      <Routes>
        <Route
            exact
            path="/"
            element={
              <HomePage
                handleFilterCharacter={handleFilterCharacter}
                valueName={dataFilters.name}
                valueHouse={dataFilters.house}
                data={filteredCharacters}
              />
            }
          />

          <Route
            path="/personaje/:name"
            element={<CharacterDetail getInfoCharacter={getInfoCharacter} />}
          />
          <Route
            path="/personaje/:name/:ancestry"
            element={<CharacterDetail getInfoCharacter={getInfoCharacter} />}
          />

          <Route path="*" element={
            <MessagePage text="Lo que estás buscando no se ha podido encontrar" />
            } 
          />

      </Routes>
    </main>
    <footer className="footer">
      <small className="footer__copy"></small>
    </footer>
  </div>
  );

}

export default App;
