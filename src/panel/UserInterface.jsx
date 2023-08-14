import styles from "./panel.module.css";

const UserInterface = ({ buttonSelection, setButtonSelection }) => {
  const handleClick = (selection) => {
    if (selection === "fill") {
      console.log(selection);
      buttonSelection === "fill" ? setButtonSelection(null) : setButtonSelection("fill")
    } else if (selection === "erase") {
      console.log(selection);
      buttonSelection === "erase" ? setButtonSelection(null) : setButtonSelection("erase")
    }
  };

  return (
    <>
      <button
        className={styles.interfaceButton}
        onClick={() => {
          handleClick("fill");
        }}
      >
        Fill
      </button>
      <button
        className={styles.interfaceButton}
        onClick={() => {
          handleClick("erase");
        }}
      >
        Erase
      </button>
    </>
  );
};

export default UserInterface;
