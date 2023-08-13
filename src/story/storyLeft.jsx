import styles from "./story.module.css";
import GridPanel from "../panel/GridPanel";


const StoryLeft = ({currentEmoji, user}) => {

  console.log(currentEmoji);
  return (
    <>
      <div className={styles.gridSection}>
        <GridPanel currentEmoji={currentEmoji} user={user}/>
      </div>
    </>
  );
};

export default StoryLeft;
