import React from "react";
import ReactDOM from "react-dom";
import Chance from "chance";

const root = ReactDOM.createRoot(document.getElementById("root"));
const singers = ["Kurt Cobain", "Lana Del Rey", "Brooke Fraser"];
const chance = new Chance();

let i = chance.integer({ min: 0, max: 2 });

const itemHelper = (items) => {
  if (items.length === 0) return "No bands";
  if (items.length === 1) return items[0];
  if (items.length === 2) return items.join(" and ");
  return items.slice(0, -1).join(", ") + " and " + items.slice(-1);
};

root.render(
  <div>
    <h1>My Favorite Singers</h1>
    <ul>
      {singers.map((singer, index) => (
        <li key={index} data-test-id={"singer-li-" + index}>
          {singer}
        </li>
      ))}
      {/* <li>Nirvana</li>
                <li>Oasis</li>
                <li>Brooke Fraser</li> */}
    </ul>
    <h2>In order: {itemHelper(singers)}</h2>
    {/* <h3>Their order is: {`${bands[0]}, ${bands[1]} and ${bands[2]}`}</h3> */}

    <h3>But #1 is really: {singers[i]}</h3>
    <p>Your singer number is: {i + 1}</p>
  </div>
);
