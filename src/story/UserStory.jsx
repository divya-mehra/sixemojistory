import { Grid } from "@mui/material";
import UserGridPanel from "../panels/grid-panel/UserGridPanel";
import styles from "./story.module.css";
import UserTextPanel from "../panels/text-panel/UserTextPanel";

const UserStory = () => {
  return (
    <Grid container className={styles.userGridSection}>
      <Grid item xs={6}>
        <UserGridPanel isLight={false}/>
      </Grid>
      <Grid item xs={6} className={styles.userTextSection}>
        <UserTextPanel/>
      </Grid>
    </Grid>
  );
};

export default UserStory;
