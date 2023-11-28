import styles from "./story.module.css";
import { Grid } from "@mui/material";

const SideToggleOnMobile = ({
  rightSectionVisible,
  setRightSectionVisible,
  toggleRightSection,
}) => {
  return (
    <div
      onClick={toggleRightSection}
      className={styles.sideToggle}
      style={{
        backgroundColor: rightSectionVisible ? "white" : "black",
        right: rightSectionVisible ? null : 0,
        left: rightSectionVisible ? 0 : null,
        zIndex: 10,
      }}
    ></div>
  );
};

export default SideToggleOnMobile;
