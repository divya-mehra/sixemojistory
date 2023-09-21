import styles from "../panel.module.css";
import GridRect from "./GridRect";
import GridImage from "./GridImage"
import { useState } from "react";

// TODO: add padding-bottom for last emoji

const GridPanel = ({ currentEmoji, isElementInCenter }) => {
  // make grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  return (
    <div
      className={styles.gridContainer}
      style={{
        paddingTop: currentEmoji === "heart" ? "25vh" : "0px",
      }}
    >
      <div
        className={`${styles.grid}`}
        // style={{ paddingBottom: currentEmoji === "hand" ? "25%" : "0px" }}
        style={{ opacity: isElementInCenter.ref1 ? 0.1 : 1,
          zIndex: isElementInCenter.ref1 ? 1 : 2, }}
      >
        {divArr.map((item) => {
          return (
            <GridRect key={item.id} id={item.id} currentEmoji={currentEmoji} />
          );
        })}
      </div>
        <div
        className={styles.gridImage}
        style={{ 
          opacity: isElementInCenter.ref1 ? 1 : 0, 
          zIndex: isElementInCenter.ref1 ? 5 : 1,
        
        }}
        >
          <GridImage/>
        </div>


    </div>
  );
};

export default GridPanel;
