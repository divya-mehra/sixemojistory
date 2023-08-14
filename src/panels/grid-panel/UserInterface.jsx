import styles from "../panel.module.css";
import DownloadButton from "./DownloadButton";

const UserInterface = ({ buttonSelection, setButtonSelection }) => {
  const handleClick = (e, selection) => {
    buttonSelection === selection
      ? setButtonSelection(null)
      : setButtonSelection(selection);
  };

  return (
    <>
      <div>
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
      </div>
      <div>
        <DownloadButton/>
      </div>
    </>
  );
};

export default UserInterface;
