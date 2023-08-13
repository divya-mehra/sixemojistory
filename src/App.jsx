import { useState } from "react";
import "./App.css";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";

function App() {
  const [currentEmoji, setCurrentEmoji] = useState(null);

  return (
    <>
      <div className="contentWrapper">
        <div className="leftSide">
          <StoryLeft currentEmoji={currentEmoji} />
        </div>
        <div className="rightSide">
          <StoryRight currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji}/>
        </div>
      </div>
    </>
  );
}

export default App;
