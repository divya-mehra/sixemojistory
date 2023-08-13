import styles from "./story.module.css";
import GridPanel from "../panel/GridPanel";

const StoryLeft = () => {
  return (
    <>
      <div className={styles.gridSection}>
        <GridPanel />
      </div>
    </>
  );
};

export default StoryLeft;
