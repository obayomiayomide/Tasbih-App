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
  const [reminderCount, setReminderCount] = useState("100");

  let themeColor = ["#465a65", "#1D313A", "#59717d", "#14262E"];

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
      <Heading
        handleUpdateCount={handleUpdateCount}
        reminderCount={reminderCount}
      />
      <CounterContainer count={count} setCount={setCount} isMuted={isMuted} />
      <IconContainer>
        <BottomIcons
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          changeTheme={changeTheme}
          darkMode={darkMode}
          handleUpdateCount={handleUpdateCount}
        />
      </IconContainer>
    </div>
  );
};

export default TasbihLitePage;
