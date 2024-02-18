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
        <Filters />
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
