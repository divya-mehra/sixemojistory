import styles from "../panel.module.css";
import { useState } from "react";

const UserTextPanel = () => {
  return (
    <div
      style={{
        color: "white",
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
        placeholder="Add text to accompany your emoji here."
      />
    </div>
  );
};

export default UserTextPanel;
