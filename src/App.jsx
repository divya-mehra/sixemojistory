import { useState } from "react";
import "./App.css";
import SideStickyNav from "./story/SideStickyNav";

import StartPanelLeft from "./panels/start-panel/StartPanelLeft";
import StartPanelRight from "./panels/start-panel/StartPanelRight";
import MainStory from "./story/MainStory";
import UserStory from "./story/UserStory";
import UserStartPanelLeft from "./panels/start-panel/UserStartPanelLeft";
import UserStartPanelRight from "./panels/start-panel/UserStartPanelRight";

import { Grid, Paper } from "@mui/material";
import StartPanelChapter from "./panels/start-panel/StartPanelChapter";
import { useEffect } from "react";
import SideToggleOnMobile from "./story/SideToggleOnMobile";

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

  const [isLight, setToLight] = useState(false);

  // toggling layout for mobile view

  function SplitScreen() {
    const [rightSectionVisible, setRightSectionVisible] = useState(false);
  }

  const toggleRightSection = () => {
    setRightSectionVisible(!rightSectionVisible);
  };

  // is mobile for hiding element visibility

  const breakpoint = 600;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= breakpoint)
    );

    return () => {
      window.removeEventListener("resize", () =>
        setIsMobile(window.innerWidth <= breakpoint)
      );
    };
  }, []);

  // download button

  return (
    <>
      <div className={isLight ? "contentWrapper" : "contentWrapper textLight"}>
        {/* {isMobile && <SideToggleOnMobile/>} */}
        <SideStickyNav isMobile={isMobile} />
        <Grid>
          {/* first start section */}
          <Grid container id="LearnStory">
            <Grid item xs={6}>
              <StartPanelLeft />
            </Grid>
            <Grid item xs={6}>
              <StartPanelRight emojis={emojis} />
            </Grid>
          </Grid>
          {/* end start section */}

          {/* first story section */}
          <div>
            <MainStory emojis={emojis} isMobile={isMobile} />
          </div>

          {/* user  section */}
          <Grid container id="CreateStory">
            <Grid item xs={6}>
              <UserStartPanelLeft />
            </Grid>
            <Grid item xs={6}>
              <UserStartPanelRight />
            </Grid>
          </Grid>

          <UserStory isMobile={isMobile} />
        </Grid>
      </div>
    </>
  );
}

export default App;
