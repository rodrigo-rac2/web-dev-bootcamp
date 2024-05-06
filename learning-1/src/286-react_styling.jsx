import React from "react";
import ReactDOM from "react-dom";

const dateNow = new Date(2020, 11, 24, 11);

const greetingAndStyleToApply = (date) => {
  let greeting = "Good ";
  const customStyle = {
    color: "red"
  };
  if (date.getHours() < 6) { 
    customStyle.color = "black";
    greeting += "Night";
  } else if (date.getHours() < 12) { 
    customStyle.color = "red";
    greeting += "Morning";
  } else if (date.getHours() < 18) {
    customStyle.color = "green";
    greeting += "Afternoon";
  } else {
    customStyle.color = "blue";
    greeting += "Evening";
  } 
  return { 
    greeting,
    customStyle
  };
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <h1 className="heading" style={greetingAndStyleToApply(dateNow).customStyle}>
    {greetingAndStyleToApply(dateNow).greeting}
  </h1>
);
