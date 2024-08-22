import React from "react";
import Screen from "./Screen";
import ControlButtons from "./ControlButtons";
import styles from "../css/counterContainer.module.css";

function CounterContainer({ count, setCount, isMuted }) {
  let tclick = new Audio("./sounds/tclick.wav");
  function handleIncrease() {
    if (!isMuted) {
      tclick.play();
    }
    console.log(isMuted);
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    if (!isMuted) {
      tclick.play();
    }
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  function handleReset() {
    if (!isMuted) {
      tclick.play();
    }
    setCount(0);
  }
  return (
    <div className={styles.counterContainer}>
      <Screen count={count} />
      <ControlButtons
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset}
      />
    </div>
  );
}

export default CounterContainer;
