import styles from "../panel.module.css";

const UserStartPanelRight = () => {
  return (
    <div
      className={styles.startPanelRight}
      style={{
        backgroundColor: "#EEC400",
      }}
    >
      <p>Why don't we go back to when it was all so simple? Just a 12x12 grid, in true Kurita form. (Of course, now we have a computer to do it.)</p>
      <p>Use the following grid to tell your own emoji story, and browse the ones created by others before you.</p>
    </div>
  );
};

export default UserStartPanelRight;
