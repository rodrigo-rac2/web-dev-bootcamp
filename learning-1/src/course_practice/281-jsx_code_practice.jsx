import React from "react";
import ReactDOM from "react-dom";

const name = "Rodrigo Alves Costa";
const currentYear = new Date().getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>
);
