import styles from "./panel.module.css";
import GridRect from "./GridRect";
import UserInterface from "../panel/UserInterface";

const GridPanel = ({ currentEmoji, user }) => {

  
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
      {user ? <UserInterface/> : null}
    </div>
  );
};

export default GridPanel;
