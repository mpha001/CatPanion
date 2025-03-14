import "./timer.scss";
import { useState, useEffect } from "react";
import PlayButton from "../../assets/icons/play-pause-button.svg";
import ResetButton from "../../assets/icons/reset.svg";
import AlarmAudio from "../../assets/audio/alarm.mp3";

function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [timeRunning, setIsRunning] = useState(false);
  let interval = 0;

  useEffect(() => {
    if (timeRunning) {
      interval = setInterval(() => {
        previousTime();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeRunning]);

  useEffect(() => {
    console.log(time);

    if (time == 0) {
      const alarm = new Audio(AlarmAudio);
      alarm.volume = 0.4;
      setIsRunning(false);
      alarm.play();
    }
  }, [time]);

  const handleReset = () => {
    clearInterval(interval);
    setTime(25 * 60);
  };

  function previousTime() {
    setTime((prev) => prev - 1);
  }

  const getTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="timer">
      <h1 className="timer__text">{getTime(time)}</h1>
      <div className="timer-box">
        <img
          className="timer-box__button"
          src={PlayButton}
          onClick={() => setIsRunning(!timeRunning)}
          alt="play button"
        />
        <img
          className="timer-box__button timer-box__button--size"
          src={ResetButton}
          onClick={handleReset}
          alt="reset button"
        />
      </div>
    </div>
  );
}

export default Timer;
