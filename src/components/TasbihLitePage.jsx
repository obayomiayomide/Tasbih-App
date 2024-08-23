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
  const [viberate, setViberate] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reminderCount, setReminderCount] = useState("100");
  const [reminderSound, setReminderSound] = useState(null);

  let themeColor = ["#465a65", "#1D313A", "#59717d", "#14262E"];

  function viberation() {
    if (!viberate && navigator.vibrate) {
      navigator.vibrate(250);
    } else {
      console.log("Vibration not supported");
    }
  }

  function reminder() {
    if (!reminderSound) {
      let rsound = new Audio("./sounds/rsound.wav");
      rsound.addEventListener("ended", () => {
        setReminderSound(null);
      });
      setReminderSound(rsound);
      console.log("this");
      rsound.play();
      alertReminder();
    }
  }

  function alertReminder() {
    alert(
      "Assalmualyk Brother! you are now at your reminder count. Please focus"
    );
  }

  const handleUpdateCount = () => {
    const newReminderCount = Number(
      prompt("Enter your new reminder count below")
    );
    if (newReminderCount) {
      setReminderCount(newReminderCount);
    }
  };

  useEffect(() => {
    if (count === reminderCount) {
      viberation();
      reminder();
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
          viberate={viberate}
          setViberate={setViberate}
        />
      </IconContainer>
    </div>
  );
};

export default TasbihLitePage;
