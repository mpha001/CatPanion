import "./musicPlayer.scss";
import AudioPlayer from "react-h5-audio-player";
import LofiTrack from "../../assets/audio/lofi_track_1.mp3";
import "react-h5-audio-player/src/styles.scss";

function musicPlayer() {
  return (
    <div className='audio-container'>
      <AudioPlayer src={LofiTrack} onPlay={e => console.log("onPlay")} />
    </div>
  );
}

export default musicPlayer;
