import styles from "../panel.module.css";
import { useState } from "react";
import UserGridRect from "./UserGridRect";
import UserInterface from "./UserInterface";

const UserGridPanel = ({ numberUserPanels, setNumberUserPanels }) => {
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
      <div className={`${styles.gridPanel}`} id='user-panel'>
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
        />
      </div>
      {/* <button className={styles.addPanelButton} onClick={addPanelButton}>(+)</button> */}
    </>
  );
};

export default UserGridPanel;
