import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Motivational Quotes
    </h1>
    <div>
      <img
        className="define-yourself "
        src="https://www.fearlessmotivation.com/wp-content/uploads/2017/07/accept-no-one.jpg"
        alt="Accept no one's definiton of your life, define yourself."
      />
      <img
        className="look-at-the-stars"
        src="https://www.fearlessmotivation.com/wp-content/uploads/2017/07/we-are-all-in-the-gutter.jpg"
        alt="We are all in the gutter, but some of us are looking at the stars."
      />
      <img
        className="difficult-roads"
        src="https://steemitimages.com/p/21PRtjKRXPQyotRPt1Hd7fPufGf1WCpCvB7qBKbTkHi99uCHeDccPJPXVbKiDYWpNCMqU49YPcqr3aGzc5iTWjSHEXL8m33mgEzyrDZsoFue183dTUKWE2qFUYtyxczF1GSNJNxbiFCs2AamYrLhiNJ?format=match&mode=fit&width=640"
        alt="Difficult roads often lead to beautiful destinations."
      />
      <p>Image displayed using an expression:</p>
      <img src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
