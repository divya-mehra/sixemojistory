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
    {
      name: "heart",
      number: "01",
      title: "Young ♥️",
      content: ["hi"],
      subtitle: "1997: It's always about love",
    },
    {
      name: "poo",
      number: "02",
      title: "You're a Pile of 💩",
      subtitle: "2007: Google pays attention emojis when expanding to global markets",
    },
    {
      name: "hand",
      number: "03",
      title: "✊🏻✊🏼✊🏽✊🏾✊🏿 ~ Department of DEI ~",
      subtitle:
        "2015: Skin tone modifiers move the emoji from symbolic toward representative",
    },
    {
      name: "bee",
      number: "04",
      title: "Becky! Leave Queen 🐝 Alone 🍋",
      subtitle: "2016: And with that, each additional emoji invited questions",
    },
    {
      name: "pistol",
      number: "05",
      title: " Does 🔫 breed real 🔫?",
      subtitle: "2018: And with that, each additional emoji invited questions",
      
      
    },
    {
      name: "thumbsup",
      number: "06",
      title: "👍 (I'll see you in court)",
      subtitle: "2023: And with that, each additional emoji invited questions",
    },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(null);

  const [userEmojis, setuserEmojis] = useState([]);
  const [currentUserEmoji, setCurrentUserEmoji] = useState(null);

  // download button

  return (
    <>
      {/* <div className="contentWrapper textLight"> */}
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
          />
        </div>
      </div>
    </>
  );
}

export default App;
