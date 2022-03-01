import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <header className="container header">
      <nav className="nav">
        <div className="nav__box">
          <a href="/" className="nav__logo">
            Shortly
          </a>
          <ul className="nav__list-left">
            <li className="nav__list-left-item">
              <a href="/" className="nav__list-left-link">
                Features
              </a>
            </li>
            <li className="nav__list-left-item">
              <a href="/" className="nav__list-left-link">
                Pricing
              </a>
            </li>
            <li className="nav__list-left-item">
              <a href="/" className="nav__list-left-link">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav__list-right">
          <li className="nav__list-right-item">
            <a href="/" className="nav__list-right-link">
              Login
            </a>
          </li>
          <li className="nav__list-right-item">
            <a href="/" className="btn btn__pill btn__pill--sm">
              Sign Up
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
}

export default Navbar;
