import React, { useState } from "react";
import ShortenedUrlItem from "./ShortenedUrlItem";
import { v4 as uuidv4 } from "uuid";

function ShortenedUrlList({ shortenedUrls }) {
  return (
    <div className="container">
      {shortenedUrls.map((urls) => (
        <ShortenedUrlItem
          key={uuidv4()}
          originalUrl={urls[0]}
          shortenedUrl={urls[1]}
        />
      ))}
    </div>
  );
}

export default ShortenedUrlList;
