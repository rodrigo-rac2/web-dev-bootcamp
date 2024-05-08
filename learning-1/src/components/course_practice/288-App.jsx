import React from "react";
import Heading from "./Heading";
import DateReact from "./288-DateReact";


function App() {
  const dateNow = new Date();

  return (
    <div>
      <Heading date={dateNow} />
      <DateReact date={dateNow} />
    </div>
  );
}

export default App;
