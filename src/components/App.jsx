import React from "react";
import Card from "./Card";
import Emojis from "../emojipedia";

function CreateCard(Emoji) {
  return (
    <Card
      id={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojis.map(CreateCard)}
        {/* <Card
          id= {Emojis[0].id}
          emoji={Emojis[0].emoji} 
          name = {Emojis[0].name}
          meaning= {Emojis[0].meaning}
        />
        <Card
          id= {Emojis[1].id}
          emoji={Emojis[1].emoji} 
          name = {Emojis[1].name}
          meaning= {Emojis[1].meaning}
        />
        <Card
          id= {Emojis[2].id}
          emoji={Emojis[2].emoji} 
          name = {Emojis[2].name}
          meaning= {Emojis[2].meaning}
        /> */}
      </dl>
    </div>
  );
}

export default App;
