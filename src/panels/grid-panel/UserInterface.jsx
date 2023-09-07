import styles from "../panel.module.css";
import DownloadButton from "./DownloadButton";
import { Tooltip } from "@mui/material";
import { Switch } from "@mui/material";

const UserInterface = ({
  buttonSelection,
  setButtonSelection,
  isLight,
  setToLight,
}) => {
  const handleClick = (e, selection) => {
    buttonSelection === selection
      ? setButtonSelection(null)
      : setButtonSelection(selection);
  };

  console.log(isLight);
  console.log(setToLight)

  const handleThemeChange = () => {


    setToLight(!isLight);
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
        {/* toggle theme */}

        <Switch
          checked={isLight}
          onChange={handleThemeChange}
          className={styles.SideStickyNavLink}
          sx={{
            "& .MuiSwitch-thumb": {
              color: "var(--secondary-color)", // Change to your desired color
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#000000", // Change to your desired color
            },
            "& .Mui-checked .MuiSwitch-track": {
              backgroundColor: "black", // Track color when switched on
            },
          }}
        />

        <DownloadButton isLight={isLight} />
      </div>
    </>
  );
};

export default UserInterface;
