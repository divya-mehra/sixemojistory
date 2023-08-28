import styles from "../panel.module.css";

const StartPanelLeft = () => {
  return (
    <div className={styles.startPanelLeft}>
      <div>
        <h1 style={{ textTransform: "uppercase" }}>
          <div>Six—</div>
          Em<span className={styles.titleEmoji}>😊</span>ji Story
        </h1>
        <h2>A history of the symbol in six emojis</h2>
      </div>
    </div>
  );
};

export default StartPanelLeft;
