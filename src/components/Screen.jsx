import styles from "../css/screen.module.css";

const Screen = ({ count }) => {
  return (
    <div className={styles.screen}>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default Screen;
