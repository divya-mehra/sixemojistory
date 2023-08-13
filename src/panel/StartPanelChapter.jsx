import styles from "./panel.module.css";

const StartPanelChapter = ({ number, title }) => {

    

  const moveToPanel = (e) => {
    // let clickedChapterNumber = e.target.id;
    const clickedChapterNumber = e.currentTarget.getAttribute("data-number");
    const targetPanel = document.querySelector(`[data-panel-number="${clickedChapterNumber}"]`);
    
    if (targetPanel) {
        targetPanel.scrollIntoView({ behavior: "smooth" });
      }

  };

  return (
    <h4 className={styles.chapter} onClick={moveToPanel} data-number={number}>
      <b className={styles.chapterNumber}>{number}</b> | {title}
    </h4>
  );
};

export default StartPanelChapter;
