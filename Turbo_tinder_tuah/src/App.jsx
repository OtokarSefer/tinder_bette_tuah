import React, { useState } from "react";
import Card from "./components/card/card.jsx";
import "./App.css";

// Lists
const nameList = [
  "John", "Jane", "Sam", "Emily",
  "Alex", "Chris", "Katie", "Mark",
  "Sarah", "Beta", "Sigma", "Dumbass",
  "Shithead", "Smith", "Williams", "Jones", 
  "Brown", "Taylor", "Thomas", "Jackson", 
  "White", "Fuckface", "Gaylord", "Harris",
  "Johnson"
];

const descriptionList = [
  "lobotomized", "Shows aggression towards women", "A frequent member of the KKK",
  "loves children", "has children", "gay and circumcised", "doesn't love lesbians",
  "I work in IT", "I'm a gamer", "not allowed near dogs or cats", 
  "not allowed near children", "would you like to be a part of my secondary family",
  "12 inches", "grower, not a shower", "shower, not a grower", 
  "i mildly racist", "0.12 inches is my record...", 
  "im the chapion of the gayeest competitoin: 'football'.",
  "I loved horses when i was little, now im scared of them",
  "I collect toenail clippings for research", 
  "I believe the Earth is flat but only on weekends",
  "I screamed at a child for smiling at me",
  "I think toothpaste is a government conspiracy",
  "I replaced all my furniture with beanbags",
  "I steal forks from restaurants for fun",
  "I only eat food that's expired—it builds immunity",
  "I named my goldfish Hitler",
  "I have a tattoo that says 'YOLO' on my forehead",
  "I think gravity is optional",
  "I once proposed to a lamp and it said no",
  "My favorite color is 'misery gray'",
  "I bark at strangers when I’m nervous",
  "I insist on being called 'Captain Underpants' at work",
  "I own 14 ferrets and they're all named Steve",
  "I cry every time I see a sandwich",
  "My hobby is licking door handles",
  "I refuse to wear shoes in public places",
  "I believe deodorant is overrated",
  "I think cats are spies sent by aliens",
  "I whisper sweet nothings to my vacuum cleaner",
  "I legally changed my name to 'Table' but forgot to tell anyone",
  "I have a shrine dedicated to my ex’s pet hamster",
  "I won’t talk to people unless they refer to me as 'Your Majesty'"
];

const imagesList = [
  "src/assets/images/men/man1.jpeg", "src/assets/images/men/man2.jpeg", 
  "src/assets/images/men/man3.jpeg", "src/assets/images/men/man4.jpeg",
  "src/assets/images/men/man5.jpeg", "src/assets/images/men/man6.png", 
  "src/assets/images/men/man7.png", "src/assets/images/men/man8.png",
  "src/assets/images/women/woman1.png", "src/assets/images/women/woman2.png", 
  "src/assets/images/women/woman3.png", "src/assets/images/women/woman4.png",
];

function App() {
  const [likedProfiles, setLikedProfiles] = useState([]);

  const likeProfile = (profile) => {
    setLikedProfiles((prevLikedProfiles) => [...prevLikedProfiles, profile]);
  };

  return (
    <div>
      <Card 
        nameList={nameList}
        descriptionList={descriptionList}
        imagesList={imagesList}
        likeProfile={likeProfile} // Pass likeProfile function to Card
        likedProfiles={likedProfiles} // Pass likedProfiles to Card
      />
    </div>
  );
}

export default App;
