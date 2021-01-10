import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.jsx";
import logo from "../logo.svg";
import "./Navbar.css";
// import logo from "../public/images/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const download = () =>
    window.open(
      "https://www.dropbox.com/s/ftl1rtft69mkrcw/CV_en_design.pdf?dl=0",
      "_blank"
    );

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} width="40" alt="" id="logo" />
            CRISTIAN VINCZE
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                RESUME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/hobbies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HOBBIES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={(closeMobileMenu, download)}
              >
                DOWNLOAD CV
              </Link>
            </li>
            {button && (
              <Button buttonStyle="btn--outline" onClick={download}>
                DOWNLOAD CV
              </Button>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
