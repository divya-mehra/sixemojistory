import { Grid, Paper } from "@mui/material";
import { useState } from "react";

import Section from "./Section"

const MainStory = ({emojis}) => {

    const [currentEmoji, setCurrentEmoji] = useState(null);

    const firstSetEmojis =  emojis.slice(0, 3);

  return (
    <Grid container>
        
        <Section currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} emojis={firstSetEmojis}/>

    </Grid>
  );
};

export default MainStory;
