//TODO: make sure all images are loaded (preload at a higher component)

const GridImage = ({activeElement, ref_data}) => {

    let imageUrl = ref_data[activeElement]
    // console.log()

  return (
    <img
      style={{
        width: "50%",
        border: "1px white solid"
        // opacity: 1,
        // zIndex: 1000,
      }}
      src={`/images/${imageUrl}.png`}
      alt=" Image"
    ></img>
  );
};

export default GridImage;
