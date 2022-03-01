import React from "react";

function MobileMenu() {
  return (
    <nav className="mobile-menu">
      <ul className="mobile-menu__list-top">
        <li className="mobile-menu__list-top-item">
          <a href="/" className="mobile-menu__list-top-link">
            Features
          </a>
        </li>
        <li className="mobile-menu__list-top-item">
          <a href="/" className="mobile-menu__list-top-link">
            Pricing
          </a>
        </li>
        <li className="mobile-menu__list-top-item">
          <a href="/" className="mobile-menu__list-top-link">
            Resources
          </a>
        </li>
      </ul>
      <hr className="mobile-menu__line" />
      <ul className="mobile-menu__list-bottom">
        <li className="mobile-menu__list-bottom-item">
          <a href="/" className="mobile-menu__list-bottom-link">
            Login
          </a>
        </li>
        <li className="mobile-menu__list-bottom-item">
          <a
            href="/"
            className="btn btn__pill btn__pill--full mobile-menu__btn"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
