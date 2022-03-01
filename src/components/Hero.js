import React from "react";
import Working from "../assets/illustration-working.svg";

function Hero() {
  return (
    <section className="hero container">
      <div className="hero__text-box">
        <h1 className="hero__title">
          More than just <br />
          shorter links
        </h1>
        <p className="hero__paragraph">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <a href="/" className="btn btn__pill btn__pill--lg hero__btn">
          Get Started
        </a>
      </div>
      <img
        src={Working}
        alt="illustration of woman working on computer"
        className="hero__img"
      />
    </section>
  );
}

export default Hero;
