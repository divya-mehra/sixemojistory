import styles from "../panel.module.css";
import GridRect from "./GridRect";
import GridImage from "./GridImage";
import { useState } from "react";

// TODO: add padding-bottom for last emoji

const GridPanel = ({ currentEmoji, isElementInCenter, ref_data }) => {
  // make grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  const anyElementActive = Object.values(isElementInCenter).some(
    (value) => value === true
  );

  let activeElement;

  // find the activeElement if an element in center state reads as true and get the key (ref1, ref2, etc.)
  for (const key in isElementInCenter) {
    if (isElementInCenter[key] === true) {
      activeElement = key;

      break; // Break the loop once a true value is found
    }
  }

  console.log(Object.keys(isElementInCenter)); // all keys (ref1, ref2, etc.)

  return (
    <div
      className={styles.gridContainer}
      style={{
        paddingTop: currentEmoji === "heart" ? "25vh" : "0px",
      }}
    >
      {
        <div
          className={`${styles.grid}`}
          // style={{ paddingBottom: currentEmoji === "hand" ? "25%" : "0px" }}
          style={{
            opacity: isElementInCenter[`${activeElement}`] ? 0.2 : 1,
            zIndex: isElementInCenter[`${activeElement}`] ? 1 : 2,
          }}
        >
          {divArr.map((item) => {
            return (
              <GridRect
                key={item.id}
                id={item.id}
                currentEmoji={currentEmoji}
              />
            );
          })}
        </div>
      }
      <div
        className={styles.gridImage}
        style={{
          opacity: isElementInCenter[`${activeElement}`] ? 1 : 0,
          zIndex: isElementInCenter[`${activeElement}`] ? 5 : 1,
        }}
      >
        {activeElement && (
          <GridImage activeElement={activeElement} ref_data={ref_data} />
        )}
      </div>
    </div>
  );
};

export default GridPanel;
