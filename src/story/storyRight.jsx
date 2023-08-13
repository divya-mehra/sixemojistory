import TextPanel from "../panel/TextPanel";
import styles from "./story.module.css";

const StoryRight = ({ currentEmoji, setCurrentEmoji }) => {
  const emojis = [
    { name: "heart",  number: '01', title: "Young ♥️" },
    { name: "poop",  number: '02', title: "asd <3" },
    { name: "hand",  number: '03', title: "d <3" },
    { name: "bomb",  number: '04', title: "sdsdf <3" },
    { name: "bee",  number: '05', title: "sd <3" },
    { name: "hand",  number: '06', title: "Yofffung <3" },
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
