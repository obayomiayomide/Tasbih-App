import { useEffect, useState } from "react";
import styles from "../css/heading.module.css";

const Heading = ({ handleUpdateCount, reminderCount }) => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.headingText}>Tasbih Lite</h1>
      <p className={styles.reminderText} onClick={handleUpdateCount}>
        Reminder:{" "}
        <span className={styles.reminderCount}>
          <strong>{reminderCount}</strong>
        </span>
      </p>
    </div>
  );
};

export default Heading;
