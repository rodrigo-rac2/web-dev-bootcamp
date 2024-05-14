import React from "react";
import Form from "../Form";

var isRegistered = true;

function App() {
  return (
    <div className="container">
      <Form registered={isRegistered} />
    </div>
  );
}

export default App;
