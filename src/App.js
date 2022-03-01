import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenUrlForm from "./components/ShortenUrlForm";
import ShortenedUrlList from "./components/ShortenedUrlList";
import Statistics from "./components/Statistics";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("urls"));
    if (urls) {
      console.log(urls);
      setShortenedUrls(urls);
    }
  }, []);
  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("urls"));
    if (urls) {
      localStorage.setItem("urls", JSON.stringify([...shortenedUrls]));
    }
  }, [shortenedUrls]);
  const shortenUrl = async (url) => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      if (response.status === 201) {
        setShortenedUrls([
          ...shortenedUrls,
          [url, response.data.result.full_short_link],
        ]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(shortenedUrls);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="box">
        <ShortenUrlForm shortenUrl={shortenUrl} />
        <ShortenedUrlList shortenedUrls={shortenedUrls} />
        <Statistics />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
