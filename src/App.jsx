import { useState } from "react";
import "./App.css";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contentWrapper">
        <div className="leftSide">
          <StoryLeft />
        </div>
        <div className="rightSide">
          <StoryRight />
        </div>
      </div>
    </>
  );
}

export default App;
