import React, { useEffect, useState } from "react";
import Screen from "./Screen";
import ControlButtons from "./ControlButtons";
import styles from "../css/counterContainer.module.css";

function CounterContainer({ count, setCount, isMuted }) {
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    const persistedCount = Number(localStorage.getItem("persistedCount"));
    if (persistedCount) {
      setCount(persistedCount);
    }
  }, [count]);

  function click() {
    if (!clickSound) {
      let tclick = new Audio("./sounds/tclick.wav");
      tclick.addEventListener("ended", () => {
        setClickSound(null);
      });
      setClickSound(tclick);
      tclick.play();
    }
  }

  function handleIncrease() {
    if (!isMuted) {
      click();
    }
    console.log(isMuted);
    setCount((prev) => prev + 1);
    localStorage.setItem("persistedCount", count + 1);
  }

  function handleDecrease() {
    if (!isMuted) {
      click();
    }
    if (count > 0) {
      setCount((prev) => prev - 1);
      localStorage.setItem("persistedCount", count - 1);
    }
  }

  function handleReset() {
    if (!isMuted) {
      click();
    }
    setCount(0);
    localStorage.setItem("persistedCount", 0);
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
