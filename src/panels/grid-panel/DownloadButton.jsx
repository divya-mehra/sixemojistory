import styles from "../panel.module.css";

// TODO: get innerHTML and append to download 


const DownloadButton = ({handleDownload}) => {
  

  return <button className={styles.interfaceButton} onClick={handleDownload}>Download</button>;
};

export default DownloadButton;
