import React from "react";
import styles from "../css/iconProp.module.css";

const IconContainer = ({ children }) => {
  return <div className={styles.iconProp}>{children}</div>;
};

export default IconContainer;
