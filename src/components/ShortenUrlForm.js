import React, { useState } from "react";

function ShortenUrlForm({ shortenUrl }) {
  const [val, setVal] = useState("");
  const [isValEmpty, setIsValEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reg = /^(ftp|http|https):\/\/[^ "]+$/;
    console.log(reg.test(val));
    if (!val.trim().length || !reg.test(val)) {
      setIsValEmpty(true);
    } else {
      shortenUrl(val);
      setIsValEmpty(false);
      setVal("");
    }
  };
  const handleChange = (e) => {
    if (val.trim().length) {
      setIsValEmpty(false);
    }
    setVal(e.target.value);
  };
  return (
    <div className="container shorten-url-box">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__control">
          <input
            type="text"
            name="url"
            className={
              isValEmpty ? "form__input form__input--empty" : "form__input"
            }
            value={val}
            placeholder="Shorten link here..."
            onChange={handleChange}
          />
          {!isValEmpty ? null : (
            <p className="error-message">Please add a valid link</p>
          )}
        </div>
        <button className="btn btn__rounded btn__rounded--lg">
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default ShortenUrlForm;
