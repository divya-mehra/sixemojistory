import TextPanel from "../panel/TextPanel";
import styles from "./story.module.css";

const StoryRight = ({ currentEmoji, setCurrentEmoji }) => {
  const emojis = ["heart", "poop", "hand", "bomb", "bee", "hand"];

  console.log(currentEmoji);

  return (
    <>
      <div className={styles.scrollArea}>
        {emojis.map((emoji) => {
          return (
            <TextPanel
              emoji={emoji}
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
