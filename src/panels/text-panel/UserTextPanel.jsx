import styles from "../panel.module.css";
import { useState } from "react";

const UserTextPanel = () => {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <textarea
        className={styles.inputText}
        id="userTextInput"
        type="text"
        // value={inputValue}
        // onChange={handleInputChange}
        placeholder="Enter text here"
      />
    </div>
  );
};

export default UserTextPanel;
