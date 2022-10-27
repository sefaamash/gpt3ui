import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    //For bigger Screens
    //MAIN CONTAINER WITH 2 DIVS INSIDE IT AS ROW
    <div className="gpt3_navbar">
      {/*dIV 1 WHICH WILL HAVE FIRTHER 2 DIV'S WITH LOGO AND OTHER WITH LINKS */}
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>

      {/*dIV2  WHICH WILL HAVE 2 btn's SignIn SignUp */}
      <div className="gpt3__navbar-sign">
        <button type="button">SignIn</button>
        <button type="button">Sign up</button>
      </div>

      
      
      {/*Mobile Friendly NavBar */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button">Sign In</button>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
