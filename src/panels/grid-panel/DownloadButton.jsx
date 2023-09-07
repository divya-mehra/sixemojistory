// import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import styles from "../panel.module.css";
import html2canvas from "html2canvas";

// TODO: adjust dimensions as needed for more/less amounts of text
// TODO: change background if on dark mode

const DownloadButton = ({isLight}) => {
  const handleDownload = async () => {

    console.log(isLight);

    const targetDiv = document.getElementById("userPanel");



    // const targetDivAll = document.getElementById("user-panel-with-text");
    const targetText = document.getElementById("userTextInput");
    console.log(targetText.value);

    if (targetDiv) {
      const canvas = await html2canvas(targetDiv, 
        {backgroundColor: (isLight) ? "white" : "black", // Set the canvas background color
      });

      // Create a wrapper div to hold the canvas and overlay elements
      const wrapperDiv = document.createElement("div");
      wrapperDiv.style.width = "600px"; // Adjust dimensions as needed
      wrapperDiv.style.height = "600px";
      wrapperDiv.style.padding = "48px";
      wrapperDiv.style.display = "flex";
      wrapperDiv.style.flexDirection = "column";
      wrapperDiv.style.alignItems = "center";
      wrapperDiv.style.gap = "24px";
      wrapperDiv.style.backgroundColor = (isLight) ? "white" : "black";
      wrapperDiv.appendChild(canvas);

      // Add text on top of the canvas
      const overlayText = document.createElement("div");
      overlayText.style.fontSize = "18px";
      overlayText.style.color = (isLight) ? "black" : "white";
      overlayText.innerText = targetText.value;
      wrapperDiv.appendChild(overlayText);

      // Convert wrapper div to image
      // const wrapperCanvas = await html2canvas(wrapperDiv);

      // Append wrapperDiv to the document body to make it visible
      document.body.appendChild(wrapperDiv);

      // Wait a bit to allow the content to render
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Capture the wrapperDiv with overlay
      const wrapperCanvas = await html2canvas(wrapperDiv);

      // Remove the wrapperDiv from the DOM
      document.body.removeChild(wrapperDiv);

      // Convert canvas to image URL
      const imageURL = wrapperCanvas.toDataURL("image/png");

      // Convert canvas to image URL
      // const imageURL = canvas.toDataURL("image/png");

      // Create a link element for downloading
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "myemojistory.png"; // Set the desired filename

      // Programmatically click the link to trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    }
  };

  return (
    <button className={styles.interfaceButton} onClick={handleDownload}>
      Download
    </button>
  );
};

export default DownloadButton;
