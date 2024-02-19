import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./Loader";
import Header from "./Header";
import HomePage from "./HomePage";
import MessagePage from "./MessagePage";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

import "../scss/App.scss";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [data, setData] = useState([]);
  // Add loading state
  const [isLoading, setIsLoading] = useState(false); 
  const [dataFilters, setDataFilters] = useState({
    name: "",
    house: "Gryffindor",
    gender: ""
  });

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters().then((responseData) => {
      // Organize data alphabetically
      const sortedData = responseData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setData(sortedData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />
  }

  const handleFilterCharacter = (filter, value) => {
    setDataFilters({ ...dataFilters, [filter]: value });
  };

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
    })

    .filter((character) => {
      if (dataFilters.gender === "") {
        return true; 
      } else {
        return character.gender === dataFilters.gender;
      }
    });
    
  const getInfoCharacter = (characterName, characterAncestry) => {
    const characterFound = data.find(
      (character) =>
        character.name.toLowerCase() === characterName.toLowerCase() &&
        character.ancestry === characterAncestry
    );
    return characterFound;
  };

  const handleClickReset = (event) => {
    event.preventDefault();
    setDataFilters({
      name: "",
      house: "Gryffindor",
      gender: ""
    });
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleFilterCharacter={handleFilterCharacter}
                handleClickReset={handleClickReset}
                valueName={dataFilters.name}
                valueHouse={dataFilters.house}
                valueGender={dataFilters.gender}
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

          <Route
            path="*"
            element={
              <MessagePage text="Lo que estás buscando no se ha podido encontrar." />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
