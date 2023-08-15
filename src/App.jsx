import { useState } from "react";
import "./App.css";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";
import StartPanelLeft from "./panels/start-panel/StartPanelLeft";
import StartPanelRight from "./panels/start-panel/StartPanelRight";
import UserStartPanelLeft from "./panels/start-panel/UserStartPanelLeft";
import UserStartPanelRight from "./panels/start-panel/UserStartpanelRight";
import SideStickyNav from "./story/SideStickyNav";

function App() {
  const emojis = [
    { name: "heart", number: "01", title: "Young ♥️", content: ["hi"], subtitle: "It's always about love" },
    { name: "poop", number: "02", title: "You're a Pile of 💩", content: ["hi"], subtitle: "Google pays attention emojis when expanding to global markets"  },
    { name: "hand", number: "03", title: "✊🏻✊🏼✊🏽✊🏾✊🏿✊ ~ Department of DEI ~", subtitle: "Skin tone modifiers move the emoji from symbolic toward representative" },
    { name: "bomb", number: "04", title: "What a 💣🐚! 😂", content: ["hi"], subtitle: "And with that, each additional emoji invited questions"  },
    { name: "bee", number: "05", title: "Becky! Leave Queen 🐝 Alone 🍋", content: ["hi"] },
    { name: "hand", number: "06", title: "👍 (I'll see you in court)", content: ["hi"] },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(null);

  const [userEmojis, setuserEmojis] = useState([]);
  const [currentUserEmoji, setCurrentUserEmoji] = useState(null);

  const [numberUserPanels, setNumberUserPanels] = useState(1);

  return (
    <>
      <div className="contentWrapper">
        <SideStickyNav />
        <div className="leftSide">
          <div id="LearnStory">
            <StartPanelLeft />
            <StoryLeft
              currentEmoji={currentEmoji}
              emojis={emojis}
              user={false}
            />

            {/* User Story */}
            </div>
            <div id="CreateStory">
            <UserStartPanelLeft />
            <StoryLeft
              currentEmoji={currentUserEmoji}
              emojis={userEmojis}
              user={true}
              numberUserPanels={numberUserPanels}
              setNumberUserPanels={setNumberUserPanels}
            />
          </div>
        </div>
        <div className="rightSide">
          <StartPanelRight emojis={emojis} />
          <StoryRight
            currentEmoji={currentEmoji}
            setCurrentEmoji={setCurrentEmoji}
            emojis={emojis}
            user={false}
          />
          {/* User Story */}
          <UserStartPanelRight />
          <StoryRight
            currentEmoji={currentUserEmoji}
            setCurrentEmoji={setCurrentUserEmoji}
            emojis={userEmojis}
            user={true}
            numberUserPanels={numberUserPanels}
            setNumberUserPanels={setNumberUserPanels}
          />
        </div>
      </div>
    </>
  );
}

export default App;
