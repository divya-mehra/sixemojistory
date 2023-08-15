import html2canvas from "html2canvas";

const DownloadButton = () => {
  const handleDownload = async() => {

    const targetDiv = document.getElementById("userPanel"); 
    // const targetDivAll = document.getElementById("user-panel-with-text"); 

    console.log('hi')

    if (targetDiv) {
        const canvas = await html2canvas(targetDiv);
  
        // Convert canvas to image URL
        const imageURL = canvas.toDataURL("image/png");
  
        // Create a link element for downloading
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = "mydivs.png"; // Set the desired filename
  
        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();
  
        // Clean up
        document.body.removeChild(link);
      }


  };

  return <button onClick={handleDownload}>Download</button>;
};

export default DownloadButton;
