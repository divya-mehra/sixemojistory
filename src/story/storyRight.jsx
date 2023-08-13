import TextPanel from "../panel/TextPanel";
import styles from "./story.module.css";

const StoryRight = ({ emojis, currentEmoji, setCurrentEmoji, user }) => {
  console.log(currentEmoji);

  return (
    <>
      <div
        className={styles.scrollArea}
        style={{ backgroundColor: user ? "#ffde34" : "black" }}
      >
        {emojis.map((emoji) => {
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
        })}
      </div>
    </>
  );
};

export default StoryRight;
