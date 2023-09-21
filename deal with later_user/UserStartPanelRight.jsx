import styles from "../panel.module.css";

const UserStartPanelRight = () => {
  return (
    <div className={`${styles.startPanelRight} ${styles.userStartPanelRight}`}>
      <h4>
        Let's go back to that 12x12 grid. (Of course, now we have a computer to
        do it.)
        <br></br>
        <br></br>
        Use the following grid to tell your own emoji story, and then download
        or share. No pressure 😛.
      </h4>
    </div>
  );
};

export default UserStartPanelRight;
