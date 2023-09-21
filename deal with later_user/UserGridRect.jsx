import styles from "../panel.module.css";
import { useState } from "react";

const UserGridRect = ({ buttonSelection, mousePressed, setMousePressed }) => {
  const [fill, setFill] = useState("transparent");

  const startFill = () => {
    setMousePressed(true);
    if (buttonSelection === "fill") {
      setFill("var(--grid-text)");
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
        setFill("var(--grid-text)");
      } else if (buttonSelection === "erase") {
        setFill("transparent");
      }
    }
  };

  return (
    <div
      className={styles.userGridRect}
      style={{ backgroundColor: fill }}
      onMouseDown={startFill}
      onMouseEnter={checkFill}
      onMouseUp={stopFill}
    ></div>
  );
};

export default UserGridRect;
