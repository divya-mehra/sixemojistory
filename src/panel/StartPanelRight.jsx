import styles from "./panel.module.css";

const StartPanelRight = () => {
  return (
    <div className={styles.startPanelRight}>
      <div className={styles.chapters}>
        <h4 className={styles.chapter}>
          <b className={styles.chapterNumber}>01</b> | Young ♥️
        </h4>
        <h4 className={styles.chapter}>
          <b className={styles.chapterNumber}>02</b> | You're a Pile of 💩
        </h4>
        <h4 className={styles.chapter}>
          <b className={styles.chapterNumber}>03</b> | ✊🏻✊🏼✊🏽✊🏾✊🏿✊ ~ Department
          of DEI ~
        </h4>
        <h4 className={styles.chapter}>
          <b className={styles.chapterNumber}>04</b> | What a 💣🐚! 😂
        </h4>
        <h4 className={styles.chapter}>
          <b className={styles.chapterNumber}>05</b> | Becky! Leave Queen 🐝
          Alone 🍋
        </h4>
        <h4 className={styles.chapter}>
          <b className={styles.chapterNumber}>06</b> | 👍 (I'll see you in
          court)
        </h4>
      </div>
    </div>
  );
};

export default StartPanelRight;
