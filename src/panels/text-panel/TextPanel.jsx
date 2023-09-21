import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import ImageOnHover from "./ImageOnHover";
import textContent from "./textContent";
// TODO: make sure text from one panel doesn't crowd into height of another panel

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
    threshold: 0, // Set the threshold to 0.35
  });

  const containerRef = useRef(null);

  console.log(currentEmoji);

  console.log(textContent[0].content);

  useEffect(() => {
    if (inView) {
      // Do something when the card comes into view

      setCurrentEmoji((prevEmoji) => (prevEmoji !== emoji ? emoji : prevEmoji));
      console.log(currentEmoji);
    }
  }, [inView, emoji, setCurrentEmoji]);

  // content

  let content;
  let detail;

  const [isImageVisible, setImageVisible] = useState({
    visible: false,
    imageUrl: "",
  });

  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });

  const showImage = (e, image) => {
    // get position relative to container

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - containerRect.left;
    const relativeY = e.clientY - containerRect.top;

    // set mouse position
    setMousePos({
      x: relativeX,
      y: relativeY,
    });

    // set image
    setImageVisible({
      ...isImageVisible,
      visible: true,
      imageUrl: image,
    });
  };

  const hideImage = () => {
    setImageVisible({
      ...isImageVisible,
      visible: false,
    });
  };

  if (number === "1999") {
    content = textContent[0].content;
  } else if (number === "2007") {
    content = textContent[1].content;
  } else if (number === "2015") {
    content = textContent[2].content;
  } else if (number === "2016") {
    content = textContent[3].content;
  } else if (number === "2018") {
    content = textContent[4].content;
  } else if (number === "2023") {
    content = textContent[5].content;
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
          <b>
            {number} | {title}
          </b>
        </h4>
        <h4 className={styles.iconBackToTop} onClick={scrollToTop}>
          ^
        </h4>
      </div>

      <hr />
      <h5 style={{ marginTop: 0, fontSize: "1rem" }}>{subtitle}</h5>
      <div className={styles.panelContent} ref={containerRef}>
        {content}
        <ImageOnHover
          isImageVisible={isImageVisible}
          setIsImageVisible={setImageVisible}
          mousePos={mousePos}
        />
      </div>
    </div>
  );
};

export default TextPanel;
