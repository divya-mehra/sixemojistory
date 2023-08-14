import styles from "../panel.module.css";

const UserStartPanelLeft = () => {
  return (
    <div className={styles.startPanelLeft}>
      <div>
        <h1 style={{ textTransform: "uppercase" }}>
          <div>Got some-thing to emoji?</div>
        </h1>
        <h2>User</h2>
      </div>
    </div>
  );
};

export default UserStartPanelLeft;
