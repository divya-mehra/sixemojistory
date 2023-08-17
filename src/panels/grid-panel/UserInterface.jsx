import styles from "../panel.module.css";
import DownloadButton from "./DownloadButton";
import { Button, Tooltip } from "@mui/material";

const UserInterface = ({ buttonSelection, setButtonSelection }) => {
  const handleClick = (e, selection) => {
    buttonSelection === selection
      ? setButtonSelection(null)
      : setButtonSelection(selection);
  };

  return (
    <>
      {/* <InterfaceTooltip /> */}
      <div>
        <Tooltip title="Drag your mouse over the grid to fill">
          <button
            className={`${styles.interfaceButton} ${
              buttonSelection === "fill" ? styles.buttonActive : ""
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
              buttonSelection === "erase" ? styles.buttonActive : ""
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
      <Tooltip title="This is a tooltip">
        <DownloadButton />
        </Tooltip>
      </div>
    </>
  );
};

export default UserInterface;
