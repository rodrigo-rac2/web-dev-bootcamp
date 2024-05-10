import React from "react";
import Avatar from "../Avatar";
import Card from "../Card";
import contacts from "../../modules/contacts";

function App() {
  return (
    <div>
      <h2 className="heading">My Contacts</h2>
      <Avatar img="https://avatars.githubusercontent.com/u/60664391?v=4" />
      {contacts.map((contact, key) => (
        <Card
          key={key}
          name={contact.name}
          img={contact.img}
          tel={contact.tel}
          email={contact.email}
        /> 
      ))}
    </div>
  );
}

export default App;
