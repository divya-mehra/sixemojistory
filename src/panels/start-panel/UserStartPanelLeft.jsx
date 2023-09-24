import styles from "../panel.module.css";

const UserStartPanelLeft = () => {
  return (
    <div className={`${styles.startPanelLeft} ${styles.userStartPanelLeft}`}>
      <div>
        <h1 style={{ textTransform: "uppercase", fontSize: "8rem" }}>
          <div>Got a story to emoji?</div>
        </h1>
        <h2>Try it out for yourself</h2>
      </div>
    </div>
  );
};

export default UserStartPanelLeft;
