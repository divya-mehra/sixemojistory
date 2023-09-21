import styles from "./story.module.css";
import GridPanel from "../panels/grid-panel/GridPanel";
import UserGridPanel from "../panels/grid-panel/UserGridPanel";

const StoryLeft = ({ currentEmoji, user, setToLight, isLight }) => {
  return (
    <>
      <div
        className={styles.gridSection}
        style={{
          height: "600vh",
          position: "relative",
          width: "100%",
        }}
      >
        {user ? <UserGridPanel isLight={isLight} setToLight={setToLight}/> : <GridPanel currentEmoji={currentEmoji} />}
      </div>
    </>
  );
};

export default StoryLeft;
