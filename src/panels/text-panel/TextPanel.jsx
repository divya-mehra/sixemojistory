import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const TextPanel = ({
  emoji,
  title,
  number,
  subtitle,
  currentEmoji,
  setCurrentEmoji,
}) => {
  // intersection observer observing

  console.log(currentEmoji);
  const [ref, inView] = useInView({
    threshold: 0.35, // Set the threshold to 0.35
  });

  console.log(currentEmoji);

  useEffect(() => {
    if (inView) {
      // Do something when the card comes into view

      setCurrentEmoji((prevEmoji) => (prevEmoji !== emoji ? emoji : prevEmoji));
      console.log(currentEmoji);
    }
  }, [inView, emoji, setCurrentEmoji]);

  // content

  let content;

  if(number === "01") {
    content = (
      <p>In 1995 Japan, half of all teenagers had a pager. </p>
    )
  }

  else if (number === "03") {
    content = (
      <>
      <p> In 2015, the standard yellow skin tone 👋 was joined by five more. </p>
      <br></br>
      <p> One year later, The Atlantic published an article,  <a href="https://www.theatlantic.com/politics/archive/2016/05/white-people-dont-use-white-emoji/481695/" target="_blank">'Is It Okay to Use the White Emoji?'</a>,...Do I want to draw attention to my race? It's a micro-decision.</p>
      
      
      <br></br>
      <p><b><span className={styles.highlightedText}>The neutral emoji isn’t neutral.</span> There is no neutral.</b></p>
      </>
    );
  }

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
        <h4 className={styles.iconBackToTop} onClick={scrollToTop}>
          ^
        </h4>
        
      </div>
      
      <hr />
      <h5 style={{marginTop: 0,}}>{subtitle}</h5>
      <div className={styles.panelContent}>{content}</div>
    </div>
  );
};

export default TextPanel;
