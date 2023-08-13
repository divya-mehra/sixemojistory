import styles from "./story.module.css";
import GridPanel from "../panel/GridPanel";

const StoryLeft = ({currentEmoji}) => {

  console.log(currentEmoji);
  return (
    <>
      <div className={styles.gridSection}>
        <GridPanel currentEmoji={currentEmoji} />
      </div>
    </>
  );
};

export default StoryLeft;
