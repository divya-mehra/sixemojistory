import styles from "../panel.module.css";
import StartPanelChapter from "./StartPanelChapter";

const StartPanelRight = ({ emojis }) => {
  return (
    <div
      className={styles.startPanelRight}
    >
      <div className={styles.chapters}>
        {emojis.map((chapter) => {
          return (
            <StartPanelChapter title={chapter.title} number={chapter.number} />
          );
        })}
      </div>
    </div>
  );
};

export default StartPanelRight;
