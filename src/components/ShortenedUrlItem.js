import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { truncate } from "../utls/truncate";

function ShortenedUrlItem({ originalUrl, shortenedUrl }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="url-box">
      <p className="url-box__original-url">
        {originalUrl.length > 60 ? truncate(originalUrl) : originalUrl}
      </p>
      <div className="url-box__right">
        <a
          className="url-box__shortened-url"
          href={shortenedUrl}
          target="_blank"
        >
          {shortenedUrl}
        </a>
        <CopyToClipboard
          text={shortenedUrl}
          onCopy={() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 5000);
          }}
        >
          <button
            className={
              isCopied
                ? "btn btn__rounded btn__rounded--sm url-box__btn btn__rounded--dark"
                : "btn btn__rounded btn__rounded--sm url-box__btn"
            }
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default ShortenedUrlItem;
