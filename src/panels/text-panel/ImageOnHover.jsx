import styles from "../panel.module.css";

const ImageOnHover = ({ isImageVisible, setIsImageVisible, mousePos }) => {
  // console.log(typeof(isImageVisible.imageUrl))

  return (
    <>
      {/* {isImageVisible.visible && ( */}
      <img
        className={styles.hoverImage}
        style={{
          opacity: isImageVisible.visible ? 1 : 0,
          zIndex: isImageVisible.visible ? 1000 : -1,
          top: mousePos.y + 50,
          left: mousePos.x - 200,
        }}
        src={`/images/${isImageVisible.imageUrl}.png`}
        alt="Hovered Image"
      />
      {/* )} */}
    </>
  );
};

export default ImageOnHover;
