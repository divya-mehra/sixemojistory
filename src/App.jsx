import { useState } from "react";
import "./App.css";
import StoryLeft from "./story/storyLeft";
import StoryRight from "./story/storyRight";
import StartPanelLeft from "./panels/start-panel/StartPanelLeft";
import StartPanelRight from "./panels/start-panel/StartPanelRight";
import UserStartPanelLeft from "./panels/start-panel/UserStartPanelLeft";
import UserStartPanelRight from "./panels/start-panel/UserStartpanelRight";
import SideStickyNav from "./story/SideStickyNav";

import html2canvas from "html2canvas";

function App() {
  const emojis = [
    {
      name: "heart",
      number: "01",
      title: "Young ♥️",
      content: ["hi"],
      subtitle: "It's always about love",
    },
    {
      name: "poo",
      number: "02",
      title: "You're a Pile of 💩",
      content: ["hi"],
      subtitle: "Google pays attention emojis when expanding to global markets",
    },
    {
      name: "hand",
      number: "03",
      title: "✊🏻✊🏼✊🏽✊🏾✊🏿✊ ~ Department of DEI ~",
      subtitle:
        "Skin tone modifiers move the emoji from symbolic toward representative",
    },
    {
      name: "pistol",
      number: "04",
      title: "What a 💣🐚! 😂",
      content: ["hi"],
      subtitle: "And with that, each additional emoji invited questions",
    },
    {
      name: "bee",
      number: "05",
      title: "Becky! Leave Queen 🐝 Alone 🍋",
      content: ["hi"],
    },
    {
      name: "thumbsup",
      number: "06",
      title: "👍 (I'll see you in court)",
      content: [
        "Emoji is the language of cute, but it becomes less cute when it results in thousands of dollars leaving your bank account. 👍 made the news when a Canadian farmer Chris Achter responded to a contract confirmation with: 👍. When the buyer sued Achter for failing to deliver, the judge ruled that 👍 was just as good as signature and ordered Achter to cough up $61,442 USD.",
      ],
    },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(null);

  const [userEmojis, setuserEmojis] = useState([]);
  const [currentUserEmoji, setCurrentUserEmoji] = useState(null);

  const [numberUserPanels, setNumberUserPanels] = useState(1);

  // download button

  const handleDownload = async () => {
    CreateStory;
    const targetDiv = document.getElementById("userPanel");

    // const targetDivAll = document.getElementById("user-panel-with-text");
    const targetText = document.getElementById("userTextInput");
    console.log(targetText.value);

    console.log("hi");

    if (targetDiv) {
      const canvas = await html2canvas(targetDiv);

      // Create a wrapper div to hold the canvas and overlay elements
      const wrapperDiv = document.createElement("div");
      wrapperDiv.style.position = "relative";
      wrapperDiv.appendChild(canvas);

      // Add text on top of the canvas
      const overlayText = document.createElement("div");
      overlayText.style.position = "absolute";
      overlayText.style.top = "50%";
      overlayText.style.left = "50%";
      overlayText.style.transform = "translate(-50%, -50%)";
      overlayText.style.fontSize = "18px";
      overlayText.style.color = "black";
      overlayText.innerText = "Text Overlay";
      wrapperDiv.appendChild(overlayText);

      // Convert wrapper div to image
      // const wrapperCanvas = await html2canvas(wrapperDiv);

      // Append wrapperDiv to the document body to make it visible
    document.body.appendChild(wrapperDiv);

    // Wait a bit to allow the content to render
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Capture the wrapperDiv with overlay
    const wrapperCanvas = await html2canvas(wrapperDiv);

    // Remove the wrapperDiv from the DOM
    document.body.removeChild(wrapperDiv);




      // Convert canvas to image URL
      const imageURL = wrapperCanvas.toDataURL("image/png");

      // Convert canvas to image URL
      // const imageURL = canvas.toDataURL("image/png");

      // Create a link element for downloading
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "myemojistory.png"; // Set the desired filename

      // Programmatically click the link to trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    }
  };

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
              handleDownload={handleDownload}
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
