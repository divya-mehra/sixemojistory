import styles from "../panel.module.css";
import { useState, useEffect } from "react";

const GridRect = ({ id, currentEmoji }) => {
  const emojis = {
    heart: [
      28, 29, 33, 34, 39, 40, 41, 42, 44, 45, 46, 47, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 63, 64, 65, 66, 67, 68, 69, 70, 71, 76, 77, 78, 79, 80, 81,
      82, 88, 89, 90, 91, 92, 93, 94, 101, 102, 103, 104, 105, 114, 115, 116,
      127,
    ],

    hand: [
      6, 7, 8, 16, 17, 18, 20, 21, 22, 28, 30, 32, 34, 35, 36, 40, 42, 44, 46,
      48, 52, 54, 56, 58, 60, 64, 66, 68, 70, 72, 76, 82, 84, 88, 96, 97, 98,
      99, 100, 101, 108, 109, 120, 121, 131, 134, 135, 136, 137, 138, 139, 140,
      141, 142,
    ],
    bomb: [8, 18, 23, 45, 51, 52, 53, 54, 56, 60, 62, 63, 64, 65, 66, 67],

    bee: [
      1, 2, 5, 6, 9, 10, 14, 17, 20, 23, 26, 27, 28, 29, 31, 34, 35, 36, 38, 42,
      43, 45, 49, 51, 53, 55, 57, 61, 63, 65, 67, 69, 70, 74, 78, 81, 83, 84,
      87, 88, 89, 92, 95, 99, 101, 103, 106, 108, 110, 113, 114, 117, 120, 121,
      124, 127, 128, 132, 135, 141, 142, 143,
    ],
  };

  const [fill, setFill] = useState("transparent");

  console.log(emojis[currentEmoji]);

  // for first story

  useEffect(() => {
    if (currentEmoji !== undefined) {
      if (emojis[currentEmoji]?.includes(id)) {
        setFill("black");
      } else {
        setFill("transparent");
      }
    }
  }, [currentEmoji, id]);



  const doNothing = () => {
    // do nothing
  };

  return (
    <div
      className={styles.gridRect}
      style={{ backgroundColor: fill }}
    ></div>
  );
};

export default GridRect;
