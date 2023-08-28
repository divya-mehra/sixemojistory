import styles from "../panel.module.css";
import { useState } from "react";
import UserGridRect from "./UserGridRect";
import UserInterface from "./UserInterface";

const UserGridPanel = ({ numberUserPanels, setNumberUserPanels, handleDownload }) => {
  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  const [buttonSelection, setButtonSelection] = useState(null);
  const [mousePressed, setMousePressed] = useState(false);

  // Removed the ability to add more panels for now bceause of complexity with storing emoji filled rects

  // const addPanelButton = () => {
  //   console.log(numberUserPanels);
  //   // setNumberUserPanels((prevNumber) => prevNumber + 1);
  //   setNumberUserPanels(numberUserPanels + 1);
  // }

  return (
    <>
      <div className={`${styles.userGridPanel}`} id="userPanel">
        {divArr.map((item) => {
          return (
            <UserGridRect
              key={item.id}
              id={item.id}
              buttonSelection={buttonSelection}
              mousePressed={mousePressed}
              setMousePressed={setMousePressed}
            />
          );
        })}
      </div>
      <div className={styles.gridInterface}>
        <UserInterface
          buttonSelection={buttonSelection}
          setButtonSelection={setButtonSelection}
          handleDownload={handleDownload}
        />
      </div>
    </>
  );
};

export default UserGridPanel;
