import React from "react";
import styles from "../css/controlButtons.module.css";
import undoIcon from "../assets/images/Undo-icon.svg";
import resetIcon from "../assets/images/Reset-icon.svg";
import Icons from "./Icons";

const ControlButtons = ({ onIncrease, onDecrease, onReset }) => {
  return (
    <div className={styles.allBtnsContainer}>
      <div className={styles.smallBtnsContainer}>
        <div className={styles.smallBtns} onClick={onDecrease}>
          <Icons icon={undoIcon} />
        </div>
        <div className={styles.smallBtns} onClick={onReset}>
          <Icons icon={resetIcon} />
        </div>
      </div>
      <div>
        <div className={styles.increaseBtn} onClick={onIncrease}></div>
      </div>
    </div>
  );
};

export default ControlButtons;
