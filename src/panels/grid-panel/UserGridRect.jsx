import styles from "../panel.module.css";
import { useState } from "react";

const UserGridRect = ({ buttonSelection, mousePressed, setMousePressed }) => {
  const [fill, setFill] = useState("transparent");

  const startFill = () => {
    setMousePressed(true);
    if (buttonSelection === "fill") {
      setFill("black");
    } else if (buttonSelection === "erase") {
      setFill("transparent");
    }
  };

  const stopFill = () => {
    setMousePressed(false);
  };

  const checkFill = () => {
    if (mousePressed) {
      if (buttonSelection === "fill") {
        setFill("black");
        
      } else if (buttonSelection === "erase") {
        setFill("transparent");
      }
    }
  };

  return (
    <div
      className={styles.gridRect}
      style={{ backgroundColor: fill }}
      onMouseDown={startFill}
      onMouseEnter={checkFill}
      onMouseUp={stopFill}
    ></div>
  );
};

export default UserGridRect;
