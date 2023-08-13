import styles from "./panel.module.css";
import GridRect from "./GridRect";

const GridPanel = () => {
  // make grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }


  return <div className={`${styles.gridPanel}`}>
{divArr.map((item) => {
        return <GridRect id={item.id} />;
      })}

  </div>;
};

export default GridPanel;
