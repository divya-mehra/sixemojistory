import { useState } from "react";
import "./App.css";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";
import StartPanelLeft from "./panel/StartPanelLeft";
import StartPanelRight from "./panel/StartPanelRight";

function App() {
  const emojis = [
    { name: "heart", number: "01", title: "Young ♥️" },
    { name: "poop", number: "02", title: "You're a Pile of 💩" },
    { name: "hand", number: "03", title: "✊🏻✊🏼✊🏽✊🏾✊🏿✊ ~ Department of DEI ~" },
    { name: "bomb", number: "04", title: "What a 💣🐚! 😂" },
    { name: "bee", number: "05", title: "Becky! Leave Queen 🐝 Alone 🍋" },
    { name: "hand", number: "06", title: "👍 (I'll see you in court)" },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(null);
  
  const [userEmojis, setuserEmojis] = useState([]);
  const [currentUserEmoji, setCurrentUserEmoji] = useState(null);


  return (
    <>
      <div className="contentWrapper">
        <div className="leftSide">
          <StartPanelLeft />
          <StoryLeft currentEmoji={currentEmoji} emojis={emojis} user={false}/>
          {/* User Story */}
          <StoryLeft currentEmoji={currentUserEmoji} emojis={userEmojis} user={true} />
        </div>
        <div className="rightSide">
          <StartPanelRight emojis={emojis}  />
          <StoryRight
            currentEmoji={currentEmoji}
            setCurrentEmoji={setCurrentEmoji}
            emojis={emojis}
            user={false}
          />
          {/* User Story */}
          <StoryRight
            currentEmoji={currentUserEmoji}
            setCurrentEmoji={setCurrentUserEmoji}
            emojis={userEmojis}
            user={true}
            
          />
        </div>
      </div>
    </>
  );
}

export default App;
