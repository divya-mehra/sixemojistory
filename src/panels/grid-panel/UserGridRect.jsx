import { useState } from "react";
import styles from "../panel.module.css";

const UserGridRect = ({buttonSelection, mousePressed, setMousePressed}) => {
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
    if (mousePressed || touchPressed) {
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
      onTouchStart={startFill}
      onTouchMove={checkFill}
      onTouchEnd={stopFill}
    ></div>
  );
};

export default UserGridRect;
