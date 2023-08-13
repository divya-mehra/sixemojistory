import styles from './panel.module.css'

const TextPanel = () => {
  return (
    <div className={`${styles.textPanel}`}>
      <div className={styles.panelHeader}>
        <h4 className={styles.panelTitle}>
          <b>01</b> | Young ♥️
        </h4>
        <h4 className={styles.iconBackToTop}>^</h4>
      </div>
      <hr />
      <div>content</div>
    </div>
  );
};

export default TextPanel;
