import TextPanel from "../panel/TextPanel";
import styles from "./story.module.css";

const StoryRight = ({ emojis, currentEmoji, setCurrentEmoji }) => {

  console.log(currentEmoji);

  return (
    <>
      <div className={styles.scrollArea}>
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
