import React from "react";
import Icons from "./Icons";
import styles from "../css/bottomIcons.module.css";
import soundIcon from "../assets/images/Sound-icon.svg";
import muteIcon from "../assets/images/Mute-icon.svg";
import vibrationIcon from "../assets/images/Vibration-icon.svg";
import noVibrationIcon from "../assets/images/No-Vibration-icon.svg";
import counterIcon from "../assets/images/Counter-icon.svg";
import themeIcon from "../assets/images/Theme-icon.svg";
import modeIcon from "../assets/images/Mode-icon.svg";

function BottomIcons({
  isMuted,
  setIsMuted,
  changeTheme,
  darkMode,
  handleUpdateCount,
  viberate,
  setViberate,
}) {
  return (
    <>
      <div className={styles.buttons}>
        <Icons
          onClick={() => setIsMuted(!isMuted)}
          icon={!isMuted ? soundIcon : muteIcon}
        />
      </div>
      <div className={styles.buttons}>
        <Icons
          onClick={() => setViberate(!viberate)}
          icon={viberate ? vibrationIcon : noVibrationIcon}
        />
      </div>
      <div className={styles.buttons}>
        <Icons onClick={handleUpdateCount} icon={counterIcon} />
      </div>
      <div className={styles.buttons}>
        <Icons onClick={changeTheme} icon={themeIcon} />
      </div>
      <div className={styles.buttons}>
        <Icons onClick={darkMode} icon={modeIcon} />
      </div>
    </>
  );
}

export default BottomIcons;
