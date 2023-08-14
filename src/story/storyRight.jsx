import TextPanel from "../panels/text-panel/TextPanel";
import UserTextPanel from "../panels/text-panel/UserTextPanel";
import styles from "./story.module.css";

const StoryRight = ({
  emojis,
  currentEmoji,
  setCurrentEmoji,
  user,
  numberUserPanels,
  setNumberUserPanels,
}) => {
  console.log(currentEmoji);

  return (
    <>
      <div
        className={styles.scrollArea}
        style={{
          backgroundColor: user ? "#ffde34" : "black",
          height: user ? `${numberUserPanels*100}vh` : "600vh",
        }}
      >
        {user ? (
          <UserTextPanel />
        ) : (
          emojis.map((emoji) => {
            return (
              <TextPanel
                data-panel-number={emoji.number}
                emoji={emoji.name}
                title={emoji.title}
                number={emoji.number}
                currentEmoji={currentEmoji}
                setCurrentEmoji={setCurrentEmoji}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default StoryRight;
