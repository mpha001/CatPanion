import "./musicPlayer.scss";
import AudioPlayer from "react-h5-audio-player";
import LofiTrack from "../../assets/audio/lofi_track_1.mp3";
import LofiTrack2 from "../../assets/audio/lofi_track_2.mp3";
import LofiTrack3 from "../../assets/audio/lofi_track_3.mp3";
import "react-h5-audio-player/src/styles.scss";

function musicPlayer() {
  const playlist = [{}];
  return (
    <div className="audio-container">
      <AudioPlayer src={LofiTrack} onPlay={(e) => console.log("onPlay")} />
    </div>
  );
}

export default musicPlayer;
