import styles from "./story.module.css";
import GridPanel from "../panels/grid-panel/GridPanel";
import UserGridPanel from "../panels/grid-panel/UserGridPanel";

const StoryLeft = ({
  currentEmoji,
  user,
  numberUserPanels,
  setNumberUserPanels,
}) => {
  console.log(currentEmoji);
  return (
    <>
      <div
        className={styles.gridSection}
        style={{
          height: user ? `${numberUserPanels*100}vh` : "600vh",
        }}
      >
        {user ? <UserGridPanel /> : <GridPanel currentEmoji={currentEmoji} />}
      </div>
    </>
  );
};

export default StoryLeft;
