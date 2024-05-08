import React from "react";
import ReactDOM from "react-dom/client";
import { add, subtract, multiply, divide } from "../modules/calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(10, 2)}</li>
      <li>{subtract(5, 7)}</li>
      <li>{divide(15, 2)}</li>
    </ul>
  )
