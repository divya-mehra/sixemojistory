import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const ImageOnHover = ({ isImageVisible, setIsImageVisible, mousePos }) => {
  // console.log(typeof(isImageVisible.imageUrl))
  console.log(mousePos);

  return (
    <>
      {isImageVisible.visible && (
        <img
          className={styles.hoverImage}
          src={`/images/${isImageVisible.imageUrl}.png`}
          alt="Hovered Image"
          style={{ top: mousePos.y+ 50, left: mousePos.x-50, width: "50%", zIndex: 1000 }}
        />
      )}
    </>
  );
};

export default ImageOnHover;
