import React from "react";
import Entry from "../Entry";
import emojipedia from "../../modules/emojipedia";

const createEntry = emojiItem => {
  return (
    <Entry
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      description={emojiItem.description}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia().map(createEntry)}</dl>
    </div>
  );
}

export default App;
