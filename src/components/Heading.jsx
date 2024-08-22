import { useEffect, useState } from "react";
import styles from "../css/heading.module.css";

const Heading = ({ count }) => {
  const [reminderCount, setReminderCount] = useState("100");
  let rsound = new Audio("./sounds/rsound.wav");

  const handleUpdateCount = () => {
    const newReminderCount = Number(
      prompt("Enter your new reminder count below")
    );
    if (newReminderCount) {
      setReminderCount(newReminderCount);
    }
  };

  useEffect(() => {
    if (count == reminderCount) {
      rsound.play();
      alert(
        "Assalmualyk Brother! you are now at your reminder count. Please focus"
      );
    }
  }, [count]);

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
