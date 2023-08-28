import styles from "../panel.module.css";
import DownloadButton from "./DownloadButton";
import {Tooltip } from "@mui/material";

const UserInterface = ({ buttonSelection, setButtonSelection, handleDownload }) => {
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
      <Tooltip title="This is a tooltip">
        <DownloadButton handleDownload={handleDownload} />
        </Tooltip>
      </div>
    </>
  );
};

export default UserInterface;
