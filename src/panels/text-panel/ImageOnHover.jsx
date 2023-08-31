import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";


const ImageOnHover = ({isImageVisible, setIsImageVisible}) => {

    console.log(typeof(isImageVisible.imageUrl))


    

    return ( <>
    {isImageVisible.visible && (
          <img className={styles.hoverImage} src={`/images/${isImageVisible.imageUrl}.png`} alt="Hovered Image" />
        )}
    </> );
}
 
export default ImageOnHover;