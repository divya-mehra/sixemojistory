import { Grid, Paper } from "@mui/material";
import { useState } from "react";

import Section from "./Section"

const MainStory = ({emojis}) => {

    const [currentEmoji, setCurrentEmoji] = useState(null);


    // if you want the first thee only:
    const firstSetEmojis =  emojis.slice(0, 3);
    
    // If you want more:



  return (
    <Grid container>
        {/* <Grid item xs={12} style={{height: "90vh", backgroundColor: "white", }}></Grid> */}
        <Section currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} emojis={emojis}/>
        
    </Grid>
  );
};

export default MainStory;
