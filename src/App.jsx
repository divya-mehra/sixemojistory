import { useState } from "react";
import "./App.css";
import MainStory from "./story/MainStory";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";
import StartPanelLeft from "./panels/start-panel/StartPanelLeft";
import StartPanelRight from "./panels/start-panel/StartPanelRight";
import UserStartPanelLeft from "./panels/start-panel/UserStartPanelLeft";
import UserStartPanelRight from "./panels/start-panel/UserStartpanelRight";
import SideStickyNav from "./story/SideStickyNav";

import { Grid, Paper } from "@mui/material";
import StartPanelChapter from "./panels/start-panel/StartPanelChapter";

function App() {
  const emojis = [
    {
      name: "heart",
      number: "1999",
      title: "Young ♥️",
      content: ["hi"],
      subtitle: "The first* set of emojis is created in Japan",
    },
    {
      name: "poo",
      number: "2007",
      title: "You're a Pile of 💩",
      subtitle: "Google considers designing for international markets",
    },
    {
      name: "hand",
      number: "2015",
      title: "✊🏻✊🏼✊🏽✊🏾✊🏿 ~ Department of DEI ~",
      subtitle: "Unicode adds five skin tone modifiers to its standard yellow",
    },
    {
      name: "bee",
      number: "2016",
      title: "Becky, Leave Queen 🐝 Alone 🍋",
      subtitle:
        "Pop star Beyonce's release of Lemonade leads to a misunderstanding on chef Rachel Ray's Instagram",
    },
    {
      name: "pistol",
      number: "2018",
      title: " Do 🔫 = real 🔫?",
      subtitle: "Apple replaces the pistol with a water gun",
    },
    {
      name: "thumbsup",
      number: "2023",
      title: "👍 (I'll see you in court)",
      subtitle:
        "A Canadian judge rules that the thumbs up emoji can be considered a contractual signature",
    },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(null);

  const [userEmojis, setuserEmojis] = useState([]);
  const [currentUserEmoji, setCurrentUserEmoji] = useState(null);
  const [isLight, setToLight] = useState(false);

  // download button

  return (
    <>
      <div className={isLight ? "contentWrapper" : "contentWrapper textLight"}>
        <SideStickyNav />

        <Grid>
          {/* first start section */}
          <div className="test">
            <Grid container>
              <Grid item xs={6}>
                <StartPanelLeft />
              </Grid>
              <Grid item xs={6}>
                <StartPanelRight emojis={emojis} />
              </Grid>
            </Grid>
          </div>
          {/* end start section */}

          {/* story section */}
          <div id="LearnStory" className="story">
            <MainStory currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} emojis={emojis} />
          </div>

          {/* deal with this bit later */}

          {/* <div id="CreateStory">
            <UserStartPanelLeft />
            <StoryLeft
              currentEmoji={currentUserEmoji}
              emojis={userEmojis}
              user={true}
              isLight={isLight}
              setToLight={setToLight}
            />
          </div>

          <UserStartPanelRight />
          <StoryRight
            currentEmoji={currentUserEmoji}
            setCurrentEmoji={setCurrentUserEmoji}
            emojis={userEmojis}
            user={true}
          /> */}


        </Grid>
      </div>
    </>
  );
}

export default App;
