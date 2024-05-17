import React from "react";

function App() {
  const [headerText, setHeaderText] = React.useState("Hello");
  const [mouseOver, setMouseOver] = React.useState(false);

  function handleClick() {
    setHeaderText("Submitted");
  }

  function handleMouseC(isMouseOver) {
    return () => setMouseOver(isMouseOver);
  }

  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseC(true)}
        onMouseOut={handleMouseC(false)}
      >
        Submit
      </button>
    </div>
  );

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }

  // return (
  //   <div className="container">
  //     <h1>{headerText}</h1>
  //     <input type="text" placeholder="What's your name?" />
  //     <button
  //       style={{ backgroundColor: mouseOver ? "black" : "white" }}
  //       onClick={handleClick}
  //       onMouseOver={handleMouseOver}
  //       onMouseOut={handleMouseOut}
  //     >
  //       Submit
  //     </button>
  //   </div>
  // );
}

//   function buttonColourBackground(colour) {
//     return function() {
//       document.querySelector("button").style.backgroundColor = colour;
//     };
//   }

//   return (
//     <div className="container">
//       <h1>{headerText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button onClick={handleClick} onMouseOver={buttonColourBackground('black')} onMouseOut={buttonColourBackground('white')}>Submit</button>
//     </div>
//   );
// }

export default App;
