import { Grid } from "@mui/material";
import { useState, useRef } from "react";
import GridPanel from "../panels/grid-panel/GridPanel";
import TextPanel from "../panels/text-panel/TextPanel";
import styles from "./story.module.css";

const Section = ({ currentEmoji, setCurrentEmoji, emojis }) => {
  const refs = {
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
  };

  const [isElementInCenter, setIsElementInCenter] = useState({
    ref1: false,
    ref2: false,
    ref3: false,
    // Add more refs if needed
  });

  return (
    
    <Grid container>
      {/* Grid on Left */}
      <Grid item xs={6} className={styles.gridSection}>
        <GridPanel
          currentEmoji={currentEmoji}
          isElementInCenter={isElementInCenter}
        />
      </Grid>
      {/* Text on Right */}
      <Grid item xs={6}>
        {emojis.map((emoji) => {
          return (
            <TextPanel
              data-panel-number={emoji.number}
              emoji={emoji.name}
              title={emoji.title}
              number={emoji.number}
              subtitle={emoji.subtitle}
              currentEmoji={currentEmoji}
              setCurrentEmoji={setCurrentEmoji}
              refs={refs}
              isElementInCenter={isElementInCenter}
              setIsElementInCenter={setIsElementInCenter}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Section;
