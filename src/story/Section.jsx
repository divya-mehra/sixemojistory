import { Grid, Paper } from "@mui/material";
import GridPanel from "../panels/grid-panel/GridPanel";
import TextPanel from "../panels/text-panel/TextPanel";
import styles from "./story.module.css";

const Section = ({ currentEmoji, setCurrentEmoji, emojis }) => {
  return (
    <Grid container>
      {/* Grid on Left */}
      <Grid item xs={6} className={styles.gridSection}>
        <GridPanel currentEmoji={currentEmoji} />
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
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Section;
