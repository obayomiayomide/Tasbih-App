import { useEffect, useState } from "react";
import Heading from "./Heading";
import styles from "../css/tasbihLite.module.css";
import CounterContainer from "./CounterContainer";
import IconContainer from "./IconContainer";
import BottomIcons from "./BottomIcons";

const TasbihLitePage = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("#465a65");
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  let themeColor = ["#465a65", "#1D313A", "#59717d", "#14262E"];

  function getRandomTheme() {
    const randomTheme = Math.floor(Math.random() * themeColor.length);
    return randomTheme;
  }

  useEffect(() => {
    document.body.style = `background: ${theme}`;
  }, [theme]);

  function changeTheme() {
    if (!isDarkMode) {
      setTheme(themeColor[getRandomTheme()]);
    }
  }

  function darkMode() {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
    if (!isDarkMode) {
      setTheme("black");
    } else {
      setTheme(themeColor[0]);
    }
  }

  return (
    <div className={styles.tasbihContainer}>
      <Heading count={count} />
      <CounterContainer count={count} setCount={setCount} isMuted={isMuted} />
      <IconContainer>
        <BottomIcons
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          changeTheme={changeTheme}
          darkMode={darkMode}
        />
      </IconContainer>
    </div>
  );
};

export default TasbihLitePage;
