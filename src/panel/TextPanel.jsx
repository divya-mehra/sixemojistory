import styles from "./panel.module.css";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from "react";

const TextPanel = ({ emoji, title, number, currentEmoji, setCurrentEmoji, }) => {

  // intersection observer observing

    console.log(currentEmoji);
    const [ref, inView] = useInView({
        threshold: 0.35, // Set the threshold to 0.35
    }
    );

    console.log(currentEmoji);

    useEffect(() => {
        if (inView) {
            // Do something when the card comes into view
            
            setCurrentEmoji(prevEmoji => prevEmoji !== emoji ? emoji : prevEmoji);
            console.log(currentEmoji);
        }
    }, [inView, emoji, setCurrentEmoji]);


    // scroll back to top

    const scrollToTop = (e) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Adds smooth scrolling animation
      });
    };

  return (
      <div className={`${styles.textPanel}`} data-panel-number={number} ref={ref}>
        <div className={styles.panelHeader}>
          <h4 className={styles.panelTitle}>
            <b>{number}</b> | {title}
          </h4>
          <h4 className={styles.iconBackToTop} onClick={scrollToTop}>^</h4>
        </div>
        <hr />
        <div>content</div>
      </div>
  );
};

export default TextPanel;
