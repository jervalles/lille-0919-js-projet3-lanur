import React, { useState } from "react";
import { scaleDown as MenuBurger } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./style/NavBar.scss";
import "./style/Burger.scss";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const burgerShowSettings = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="main-NavBar">
      <h1>
        <Link to="/newsfeed">
          <span className="Lan">LAN'</span>U.R
        </Link>
      </h1>
      <ul>
        <li>
          <a href="#">
            <span className="FirstLetter">A</span>ctus
          </a>
        </li>
        <li>
          <a href="#">
            <span className="FirstLetter">T</span>eams
          </a>
        </li>
        <li onClick={() => setDisplayMenu(!displayMenu)}>
          <a href="#">
            <span className="FirstLetter">É</span>vènements
            {displayMenu ? (
              <img
                className="triangle"
                src="../images/Black_triangle_rotated.svg"
              ></img>
            ) : (
              <img
                className="triangle"
                src="../images/Black_triangle.svg"
              ></img>
            )}
          </a>
          {displayMenu ? (
            <div className="dropDownMenu">
              <li>
                <a href="#">
                  <span className="FirstLetter">A</span>genda
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="FirstLetter">R</span>ésultats
                </a>
              </li>
            </div>
          ) : null}
        </li>

        <li>
          <Link to="/EditProfile">
            <span className="FirstLetter">P</span>rofil
          </Link>
        </li>
      </ul>
      <MenuBurger width={"100%"} isOpen={true} id="MenuBurger">
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={burgerShowSettings} className="menu-item--small" href="">
          Settings
        </a>
      </MenuBurger>
    </nav>
  );
}

export default NavBar;
