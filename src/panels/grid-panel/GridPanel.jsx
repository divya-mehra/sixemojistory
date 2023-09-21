import styles from "../panel.module.css";
import GridRect from "./GridRect";
import { useState } from "react";

// TODO: add padding-bottom for last emoji

const GridPanel = ({ currentEmoji }) => {
  // make grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  return (
    <div style={{position: "relative", height: "100%", paddingTop: "25vh"}}>
      <div
        className={`${styles.gridPanel}`}
        style={{ paddingBottom: currentEmoji === "thumbsup" ? "25%" : "0px" }}
      >
        {divArr.map((item) => {
          return (
            <GridRect key={item.id} id={item.id} currentEmoji={currentEmoji} />
          );
        })}
      </div>
    </div>
  );
};

export default GridPanel;
