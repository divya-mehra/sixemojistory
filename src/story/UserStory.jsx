import { Grid } from "@mui/material";
import UserGridPanel from "../panels/grid-panel/UserGridPanel";
import styles from "./story.module.css";
import UserTextPanel from "../panels/text-panel/UserTextPanel";

const UserStory = ({ isMobile }) => {
  return (
    <Grid container className={styles.userGridSection}>
      <Grid item xs={12} sm={6}>
        <UserGridPanel isLight={false} />
      </Grid>
      <Grid item xs={0} sm={6} className={styles.userTextSection}>
        <UserTextPanel  isMobile={isMobile}/>
      </Grid>
    </Grid>
  );
};

export default UserStory;
