import TextPanel from "../panel/TextPanel";
import styles from "./story.module.css";

const StoryRight = () => {
  return (
    <>
      <div className={styles.scrollArea}>
        <TextPanel/>
        <TextPanel/>
        <TextPanel/>
        <TextPanel/>
        <TextPanel/>
        <TextPanel/>
      </div>
    </>
  );
};

export default StoryRight;
