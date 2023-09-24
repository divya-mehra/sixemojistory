import { Grid } from "@mui/material";
import { useState, useRef } from "react";
import GridPanel from "../panels/grid-panel/GridPanel";
import TextPanel from "../panels/text-panel/TextPanel";
import styles from "./story.module.css";

const Section = ({ currentEmoji, setCurrentEmoji, emojis }) => {
  // here are the refs & all the ref info!

  const refs = {
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  };

  const [isElementInCenter, setIsElementInCenter] = useState({
    ref1: false,
    ref2: false,
    ref3: false,
    ref4: false,
    ref5: false,
  });

  const ref_data = {
    ref1: "pocketbell",
    ref2: "kurita",
    ref3: "drslump",
    ref4: "rachael",
    ref5: "rita",
  };

  // preload the pictures

  return (
    <Grid container>
      {/* Grid on Left */}
      <Grid item xs={6} className={styles.gridSection}>
        <GridPanel
          currentEmoji={currentEmoji}
          isElementInCenter={isElementInCenter}
          ref_data={ref_data}
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
              ref_data={ref_data}
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
