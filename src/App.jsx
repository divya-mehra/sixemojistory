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
      subtitle: "1999: The second* set of emojis is created in Japan",
    },
    {
      name: "poo",
      number: "02",
      title: "You're a Pile of 💩",
      subtitle: "2007: Google considers designing for international markets",
    },
    {
      name: "hand",
      number: "03",
      title: "✊🏻✊🏼✊🏽✊🏾✊🏿 ~ Department of DEI ~",
      subtitle:
        "2015: Unicode adds five skin tone modifiers to its standard yellow",
    },
    {
      name: "bee",
      number: "04",
      title: "Becky! Leave Queen 🐝 Alone 🍋",
      subtitle: "2016: Pop star Beyonce's release of Lemonade leads to a misunderstanding on chef Rachel Ray's Instagram",
    },
    {
      name: "pistol",
      number: "05",
      title: " Does 🔫 breed real 🔫?",
      subtitle: "2018: Apple replaces the gun with a water pistol",
      
      
    },
    {
      name: "thumbsup",
      number: "06",
      title: "👍 (I'll see you in court)",
      subtitle: "2023: A Canadian judge rules that the thumbs up emoji can be considered a contractual signature",
    },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(null);

  const [userEmojis, setuserEmojis] = useState([]);
  const [currentUserEmoji, setCurrentUserEmoji] = useState(null);

  // download button

  return (
    <>
      <div className="contentWrapper textLight">
      {/* <div className="contentWrapper"> */}
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
