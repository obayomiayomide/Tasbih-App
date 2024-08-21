import React from "react";
import styles from "../css/icons.module.css";

function Icons({ icon, onClick }) {
  return <img className={styles.img} onClick={onClick} src={icon} alt={icon} />;
}

export default Icons;
