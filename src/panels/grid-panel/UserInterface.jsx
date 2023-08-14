import styles from "../panel.module.css";

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
        <button>Download</button>
      </div>
    </>
  );
};

export default UserInterface;
