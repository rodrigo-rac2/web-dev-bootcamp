/*
 * This will set the header text to "Hello, stranger!" when the page loads,
 * and to "Hello, [name] submitted the form." when the button is clicked.
 *
 * The button will change its background color to black when the mouse hovers over it,
 * and to white when the mouse leaves the button.
 **/

import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headerText, setHeaderText] = React.useState(`Hello, stranger!`);
  const [mouseOver, setMouseOver] = React.useState(false);

  function handleInputText(event) {
    const inputText = event.target.value;
    setName(inputText);
  }

  function handleClick(event) {
    name ? setHeaderText(`${name} submitted the form.`) : setHeaderText("Please enter your name.");

    // prevent the default form submission
    event.preventDefault();
  }

  function handleMouse(isMouseOver) {
    return () => setMouseOver(isMouseOver);
  }

  return (
    <div className="container">
      <h1>{headerText}</h1>
      <form onSubmit={handleClick}>
        {/* controlled component */}
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleInputText}
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: mouseOver ? "black" : "white" }}
          onMouseOver={handleMouse(true)}
          onMouseOut={handleMouse(false)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
