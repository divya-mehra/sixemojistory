import styles from "./story.module.css";
import GridPanel from "../panels/grid-panel/GridPanel";
import UserGridPanel from "../panels/grid-panel/UserGridPanel";

const StoryLeft = ({
  currentEmoji,
  user,
  numberUserPanels,
  setNumberUserPanels,
  handleDownload
}) => {
  
  return (
    <>
      <div
        className={styles.gridSection}
        style={{
          height: user ? `${numberUserPanels * 100}vh` : "600vh",
          position: "relative",
          width: "100%"
          
        }}
      >
        {user ? (
          <UserGridPanel
            numberUserPanels={numberUserPanels}
            setNumberUserPanels={setNumberUserPanels}
            handleDownload={handleDownload}
          />
        ) : (
          <GridPanel currentEmoji={currentEmoji} />
        )}
      </div>
    </>
  );
};

export default StoryLeft;
