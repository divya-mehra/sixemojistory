import TextPanel from "../panels/text-panel/TextPanel";
import UserTextPanel from "../panels/text-panel/UserTextPanel";
import styles from "./story.module.css";

const StoryRight = ({
  emojis,
  currentEmoji,
  setCurrentEmoji,
  user,
}) => {
  console.log(currentEmoji);

  return (
    <>
      <div
        className={styles.scrollArea}
        style={{
          backgroundColor: user ? "#ffde34" : "black",
          height: user ? `100vh` : "600vh",
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
                subtitle={emoji.subtitle}
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
