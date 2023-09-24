import styles from "../panel.module.css";
import { Tooltip } from "@mui/material";
import DownloadButton from "./DownloadButton";

const UserInterface = ({ buttonSelection, setButtonSelection }) => {
  const handleClick = (e, selection) => {
    buttonSelection === selection
      ? setButtonSelection(null)
      : setButtonSelection(selection);
  };

  return (
    <div className={styles.interfaceContainer}>
      <div>
        <Tooltip title="Drag your mouse over the grid to fill">
          <button
            className={`${styles.interfaceButton} ${
              buttonSelection === "fill" ? styles.activeInterfaceButton : ""
            }`}
            onClick={(e) => {
              handleClick(e, "fill");
            }}
          >
            Fill
          </button>
        </Tooltip>
        <Tooltip title="Drag your mouse over the grid to erase">
          <button
            className={`${styles.interfaceButton} ${
              buttonSelection === "erase" ? styles.activeInterfaceButton : ""
            }`}
            onClick={(e) => {
              handleClick(e, "erase");
            }}
          >
            Erase
          </button>
        </Tooltip>
      </div>
      <div>
        {/* toggle theme */}

        <DownloadButton />
      </div>
    </div>
  );
};

export default UserInterface;
