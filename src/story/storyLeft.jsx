import styles from "./story.module.css";
import GridPanel from "../panels/grid-panel/GridPanel";
import UserGridPanel from "../panels/grid-panel/UserGridPanel";

const StoryLeft = ({ currentEmoji, user, isLight }) => {
  return (
    <>
      <div
        className={styles.gridSection}
        style={{
          height: user ? `100vh` : "600vh",
          position: "relative",
          width: "100%",
        }}
      >
        {user ? <UserGridPanel isLight={isLight} /> : <GridPanel currentEmoji={currentEmoji} />}
      </div>
    </>
  );
};

export default StoryLeft;
