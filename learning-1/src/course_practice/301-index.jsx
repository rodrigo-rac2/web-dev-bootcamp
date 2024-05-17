import React from "react";
import ReactDOM from "react-dom/client";
import CarModels from "../modules/practice";

const [honda, tesla] = CarModels;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour, ...hondaColours],
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour, ...teslaColours],
} = tesla;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
      <th>Other colours</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
      <td>{teslaColours.join(", ")}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaColours.join(", ")}</td>
    </tr>
  </table>
);
