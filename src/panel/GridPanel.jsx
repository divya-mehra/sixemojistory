import styles from "./panel.module.css";
import GridRect from "./GridRect";
import UserInterface from "../panel/UserInterface";
import { useState } from "react";

const GridPanel = ({ currentEmoji, user }) => {

  
  // make grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  const [buttonSelection, setButtonSelection] = useState(null)
  const [mousePressed, setMousePressed] = useState(false);



  

  return (
    <>
    <div className={`${styles.gridPanel}`}>
      {divArr.map((item) => {
        return <GridRect key={item.id} id={item.id} currentEmoji={currentEmoji} buttonSelection={buttonSelection} user={user} mousePressed={mousePressed} setMousePressed={setMousePressed}/>;
      })}
      
      </div>
      <div className={styles.gridInterface} >
      {user ? <UserInterface buttonSelection={buttonSelection} setButtonSelection={setButtonSelection}/> : null}
      </div>
      </>
    
    
  );
};

export default GridPanel;
