import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />
    <Card
      name="Random Image"
      img="https://picsum.photos/id/237/200/300"
      tel="+123456789"
      email="randomimage@test.com"
    />
    <input id="fName" />
  </div>,
  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
