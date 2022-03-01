import React from "react";
import Card from "./Card";

import StatisticsSvg from "../assets/icon-brand-recognition.svg";
import DetailedRecordsSvg from "../assets/icon-detailed-records.svg";
import CustomizeSvg from "../assets/icon-fully-customizable.svg";

function Statistics() {
  return (
    <section className="statistics container">
      <header className="statistics__header">
        <h2 className="statistics__title">Advanced Statistics</h2>
        <p className="statistics__paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </header>
      <div className="statistics__row">
        <Card
          img={StatisticsSvg}
          alt="statistics"
          cardNumber="1"
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links help instill confidence in your content."
        />
        <Card
          img={DetailedRecordsSvg}
          alt="detailed records"
          cardNumber="2"
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          img={CustomizeSvg}
          alt="customization"
          cardNumber="3"
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}

export default Statistics;
