import "./musicPlayer.scss";
import AudioPlayer from "react-h5-audio-player";
import Alarm from "../../assets/audio/alarm.mp3";
import "react-h5-audio-player/src/styles.scss";

function musicPlayer() {
  return (
    <div className="audio-container">
      <AudioPlayer src={Alarm} onPlay={(e) => console.log("onPlay")} />
    </div>
  );
}

export default musicPlayer;
