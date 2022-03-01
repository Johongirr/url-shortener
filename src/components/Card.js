import React from "react";

function Card({ img, cardNumber, alt, title, description }) {
  return (
    <div className={`card card--${cardNumber}`}>
      <figure className="card__img-box">
        <img src={img} alt={alt} className="card__img" />
      </figure>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__paragraph">{description}</p>
      </div>
    </div>
  );
}

export default Card;
