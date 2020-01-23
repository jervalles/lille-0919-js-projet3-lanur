import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/NavBar.scss";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <nav className="main-NavBar">
      <h1>
        <a href="#">
          <span className="Lan">LAN'</span>U.R
        </a>
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
                alt="v"
              ></img>
            ) : (
              <img
                className="triangle"
                src="../images/Black_triangle.svg"
                alt=">"
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
    </nav>
  );
}

export default NavBar;
