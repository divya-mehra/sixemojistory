import { useState } from "react";
import "./App.css";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";
import StartPanelLeft from "./panel/StartPanelLeft";
import StartPanelRight from "./panel/StartPanelRight";

function App() {
  const [currentEmoji, setCurrentEmoji] = useState(null);

  return (
    <>
      <div className="contentWrapper">
        <div className="leftSide">
          <StartPanelLeft />
          <StoryLeft currentEmoji={currentEmoji} />
        </div>
        <div className="rightSide">
          <StartPanelRight />
          <StoryRight
            currentEmoji={currentEmoji}
            setCurrentEmoji={setCurrentEmoji}
          />
        </div>
      </div>
    </>
  );
}

export default App;
