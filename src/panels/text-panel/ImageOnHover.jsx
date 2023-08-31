import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import kurita from "/images/kurita.jpeg";


const ImageOnHover = ({isImageVisible, setIsImageVisible}) => {
    
    return ( <>
    {isImageVisible.visible && (
          <img className={styles.hoverImage} src={kurita} alt="Hovered Image" />
        )}
    </> );
}
 
export default ImageOnHover;