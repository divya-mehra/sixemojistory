import styles from "../panel.module.css";
import { useState, useEffect, useRef } from "react";

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
    pistol: [
      38, 50, 51, 52, 53, 54, 55, 56, 57, 58, 62, 63, 64, 65, 66, 67, 68, 69,
      70, 77, 79, 80, 81, 90, 91, 92, 93, 94, 104, 105, 106, 116, 117, 118,
    ],
    poo: [
      5, 17, 18, 28, 29, 30, 31, 39, 40, 41, 42, 43, 45, 52, 53, 54, 55, 56, 57,
      58, 63, 64, 65, 66, 67, 68, 69, 70, 75, 76, 77, 78, 79, 80, 81, 86, 87,
      89, 90, 91, 93, 94, 95, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
      107, 108, 109, 110, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124,
      128, 129, 130, 131, 136, 137, 138, 139, 140, 141,
    ],

    bee: [
      1, 2, 5, 6, 9, 10, 14, 17, 20, 23, 26, 27, 28, 29, 31, 34, 35, 36, 38, 42,
      43, 45, 49, 51, 53, 55, 57, 61, 63, 65, 67, 69, 70, 74, 78, 81, 83, 84,
      87, 88, 89, 92, 95, 99, 101, 103, 106, 108, 110, 113, 114, 117, 120, 121,
      124, 127, 128, 132, 135, 141, 142, 143,
    ],
    thumbsup: [
      4, 5, 6, 16, 19, 28, 31, 40, 43, 44, 45, 46, 47, 51, 54, 60, 61, 62, 63,
      66, 67, 68, 69, 70, 71, 78, 84, 90, 91, 92, 93, 94, 95, 102, 108, 115,
      116, 117, 118, 119, 121, 122, 123, 124, 127, 131, 137, 138, 139, 140, 141,
      142,
    ],
  };

  const [fill, setFill] = useState("transparent");
  const intervalRef = useRef(null);

  useEffect(() => {
    // Clear the previous interval if it exists
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // console.log(id);

    if (emojis[currentEmoji]?.includes(id) && fill === "transparent") {
      let delay = Math.random() * 1000;
      // console.log(delay);
      intervalRef.current = setInterval(() => {
        setFill("var(--grid-text)");
      }, delay);
    } else if (
      !emojis[currentEmoji]?.includes(id) &&
      fill === "var(--grid-text)"
    ) {
      setFill("transparent");
    }

    // Clear the interval when the component unmounts or when currentEmoji changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentEmoji]);

  return (
    <div className={styles.gridRect} style={{ backgroundColor: fill }}></div>
  );
};

export default GridRect;
