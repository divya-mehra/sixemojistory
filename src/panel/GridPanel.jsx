import styles from "./panel.module.css";
import GridRect from "./GridRect";

const GridPanel = ({ currentEmoji }) => {
  // make grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  

  return (
    <div className={`${styles.gridPanel}`}>
      {divArr.map((item) => {
        return <GridRect key={item.id} id={item.id} currentEmoji={currentEmoji} />;
      })}
    </div>
  );
};

export default GridPanel;
