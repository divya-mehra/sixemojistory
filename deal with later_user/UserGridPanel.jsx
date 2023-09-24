import styles from "../panel.module.css";
import { useState } from "react";
import UserGridRect from "./UserGridRect";
import UserInterface from "../src/panels/grid-panel/UserInterface";

const UserGridPanel = ({setToLight, isLight}) => {
  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  const [buttonSelection, setButtonSelection] = useState(null);
  const [mousePressed, setMousePressed] = useState(false);

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
          setToLight={setToLight}
          isLight={isLight}
        />
      </div>
    </>
  );
};

export default UserGridPanel;
