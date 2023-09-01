import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const ImageOnHover = ({ isImageVisible, setIsImageVisible, mousePos }) => {
  // console.log(typeof(isImageVisible.imageUrl))
  

  return (
    <>
      {/* {isImageVisible.visible && ( */}
        <img
          className={styles.hoverImage}
          style={{visibility: (isImageVisible.visible) ? "visible" : "hidden", top: mousePos.y+ 50, left: mousePos.x-50}}
          src={`/images/${isImageVisible.imageUrl}.png`}
          alt="Hovered Image"
        />
      {/* )} */}
      
    </>
  );
};

export default ImageOnHover;
