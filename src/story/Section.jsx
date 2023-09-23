import { Grid } from "@mui/material";
import { useState, useRef } from "react";
import GridPanel from "../panels/grid-panel/GridPanel";
import TextPanel from "../panels/text-panel/TextPanel";
import styles from "./story.module.css";

const Section = ({ currentEmoji, setCurrentEmoji, emojis }) => {
  // here are the refs

  const refs = {
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
  };

  const [isElementInCenter, setIsElementInCenter] = useState({
    ref1: false,
    ref2: false,
    ref3: false,
  });

  const ref_data = { ref1: "pocketbell", ref2: "kurita", ref3: "drslump" };

  // preload the pictures

  const images = {};

  const preloadImages = (imageUrls) => {



    for (const key in imageUrls) {
      const imageUrl = `/images/${imageUrls[key]}.png`;
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        // Image is loaded, you can choose to do something when an image is ready
        // For example, update state to indicate that the image is ready to be displayed
        images[key] = true;
        // You can set a state variable or some data structure to track image loading
        // and use it in your component to decide when to display images.
      };
    }
  };

  // Call preloadImages with your image URLs before rendering your component
  preloadImages(ref_data);

  return (
    <Grid container>
      {/* Grid on Left */}
      <Grid item xs={6} className={styles.gridSection}>
        <GridPanel
          currentEmoji={currentEmoji}
          isElementInCenter={isElementInCenter}
          ref_data={ref_data}
          images={images}
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
