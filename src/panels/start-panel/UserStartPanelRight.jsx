import styles from "../panel.module.css";

const UserStartPanelRight = () => {
  return (
    <div
      className={`${styles.startPanelRight} ${styles.userStartPanelRight}`}
    >
      <h4>
        Why don't we go back to when it was all so simple? Just a 12x12 grid, in
        true Kurita form. (Of course, now we have a computer to do it.)
        <br></br>
        <br></br>
        Use the following grid to tell your own emoji story, and then download or share.
      </h4>
    </div>
  );
};

export default UserStartPanelRight;
