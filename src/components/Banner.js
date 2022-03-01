import React from "react";

function Banner() {
  return (
    <section className="banner">
      <header className="banner__header">
        <h2 className="banner__title">Boost your links today</h2>
        <div className="banner__btn-box">
          <a href="/" className="btn btn__pill btn__pill--lg banner__btn">
            Get Started
          </a>
        </div>
      </header>
    </section>
  );
}

export default Banner;
