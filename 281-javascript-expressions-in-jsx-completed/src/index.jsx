import React from "react";
import ReactDOM from "react-dom";

const name = "Conrad";
const initial = "C";
const lName = "Mare";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My lucky number is {luckyNumber}</p>
    <p>This is a random number: {Math.floor(Math.random() * 10)}</p>
    <p>Writing my full name: {initial + " " + lName}</p>
    <p>Using template literals to write my name: {`${initial} ${lName}`}</p>
  </div>,
  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
