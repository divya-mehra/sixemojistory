import { Grid, Paper } from "@mui/material";

import Section from "./Section"

const MainStory = ({currentEmoji, setCurrentEmoji, emojis}) => {
  return (
    <Grid container spacing={2}>
        <Section currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} emojis={emojis}/>

{/* 
      <Grid item xs={6}>
        <StoryLeft currentEmoji={currentEmoji} emojis={emojis} user={false} />
      </Grid>
      <Grid item xs={6}>
        <StoryRight
          currentEmoji={currentEmoji}
          setCurrentEmoji={setCurrentEmoji}
          emojis={emojis}
          user={false}
        />
      </Grid> */}
    </Grid>
  );
};

export default MainStory;
