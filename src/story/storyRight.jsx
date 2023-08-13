import TextPanel from "../panel/TextPanel";
import styles from "./story.module.css";

const StoryRight = ({ currentEmoji, setCurrentEmoji }) => {
  const emojis = [
    { name: "heart",  title: "Young ♥️" },
    { name: "poop",  title: "asd <3" },
    { name: "hand",  title: "d <3" },
    { name: "bomb",  title: "sdsdf <3" },
    { name: "bee",  title: "sd <3" },
    { name: "hand",  title: "Yofffung <3" },
  ];

  console.log(currentEmoji);

  return (
    <>
      <div className={styles.scrollArea}>
        {emojis.map((emoji) => {
          return (
            <TextPanel
              emoji={emoji.name}
              title={emoji.title}
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
