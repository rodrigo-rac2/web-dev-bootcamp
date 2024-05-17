/* 
 * This will set the header text to "Hello, stranger!" when the page loads, 
 * to "Hello, [name]." when some text is typed into the input,
 * to "Hello, [name] submitted the form." when the button is clicked,
 * and to "Please enter your name." when the button is clicked without entering a name,
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
    setHeaderText(`Hello, ${inputText ? inputText : "stranger"}!`);
    // setHeaderText(`Hello, ${document.querySelector("input").value}!`);
    // setName(document.querySelector("input").value);
  }

  function handleClick() {
    // const inputText = document.querySelector("input").value;
    if (!name) {
      return setHeaderText("Please enter your name.");
    }
    setHeaderText(`${name} submitted the form.`);
  }

  function handleMouse(isMouseOver) {
    return () => setMouseOver(isMouseOver);
  }

  return (
    <div className="container">
      <h1>{headerText}</h1>
      {/* controlled component */}
      <input
        onChange={handleInputText}
        type="text"
        placeholder="What's your name?"
        value={name}
        // value={name == "stranger" ? "" : name}
      />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouse(true)}
        onMouseOut={handleMouse(false)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
