import { Link } from "react-router-dom";

import "../scss/Header.scss";

import logo from "../images/Harry_Potter_wordmark.svg";

function Header() {

  return (
    <header className="header">
      <Link to={"/"}>
        <img className="header__logo" src={logo} alt="Logo Harry Potter" />
      </Link>
    </header>
  )

}

export default Header;

