import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

const anotherCustomStyle = {
  color: "green",
  backgroundColor: "grey",
  border: "dotted",
  textAlign: "center",
  opacity: "50%",
};

customStyle.color = "blue";

anotherCustomStyle.backgroundColor = "teal";
anotherCustomStyle.color = "black";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <h2 style={anotherCustomStyle}>Another heading</h2>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
