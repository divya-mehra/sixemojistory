import UserGridRect from "./UserGridRect";
import styles from "../panel.module.css";
import { useState } from "react";
import UserInterface from "./UserInterface";

const UserGridPanel = () => {
  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  const [buttonSelection, setButtonSelection] = useState(null);
  const [mousePressed, setMousePressed] = useState(false);

  return (
    <div className={styles.userGridContainer}>
      {
        <div className={`${styles.userGrid}`}>
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
      }
      <UserInterface
        buttonSelection={buttonSelection}
        setButtonSelection={setButtonSelection}
      />
    </div>
  );
};

export default UserGridPanel;
