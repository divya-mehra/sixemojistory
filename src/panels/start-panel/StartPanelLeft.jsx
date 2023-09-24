import styles from "../panel.module.css";
import { useEffect, useState } from "react";
import { Grid, Paper } from '@mui/material';

const StartPanelLeft = () => {
  const [titleEmoji, setTitleEmoji] = useState("😊");

  return (
    
    <div className={styles.startPanelLeft}>
      <div>
        <h1 style={{ textTransform: "uppercase" }}>
          <div>Six—</div>
          Em<span className={styles.titleEmoji}>{titleEmoji}</span>ji Story
        </h1>
        <h2>A brief history of the symbol</h2>
        <h3>
          <i>(as told through six old-school emojis)</i>
        </h3>
      </div>
    </div>
    
  );
};

export default StartPanelLeft;
