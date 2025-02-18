import "./tools.scss";
import { useState } from "react";
import ToolsIcon from "../../assets/icons/menu.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import ListIcon from "../../assets/icons/list.svg";
import NotesIcon from "../../assets/icons/notes.svg";
import MusicIcon from "../../assets/icons/music-note.svg";
import Timer from "../timer/timer";
import MusicPlayer from "../musicPlayer/musicPlayer";
import Notes from "../notes/notes";

function Tools() {
  const [toggle, setToggle] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [togglePlayer, setTogglePlayer] = useState(false);
  const [toggleNotes, setToggleNotes] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const handleTimerClick = () => {
    setToggleTimer((prev) => !prev);
    console.log("Timer click");
  };

  const handlePlayerClick = () => {
    setTogglePlayer((prev) => !prev);
    console.log("Music Player click");
  };
  const handleNotesClick = () => {
    setToggleNotes((prev) => !prev);
    console.log("Notes click");
  };

  return (
    <>
      <div className="tools-container">
        {toggle ? (
          <ul className="tools__list">
            <li className="tools__item">
              <img
                className="tools__image"
                src={ToolsIcon}
                alt="tools icon"
                onClick={handleClick}
              />
            </li>

            <li className="tools__item tools__item--mod">
              <img
                className="tools__image tools__image--active "
                src={ClockIcon}
                alt="clock icon"
                onClick={handleTimerClick}
              />
            </li>

            <li className="tools__item tools__item--mod">
              <img
                className="tools__image tools__image--active "
                src={ListIcon}
                alt="list icon"
              />
            </li>
            <li className="tools__item tools__item--mod">
              <img
                className="tools__image tools__image--active "
                src={NotesIcon}
                alt="notes icon"
                onClick={handleNotesClick}
              />
            </li>
            <li className="tools__item tools__item--mod">
              <img
                className="tools__image tools__image--active "
                src={MusicIcon}
                alt="music player icon"
                onClick={handlePlayerClick}
              />
            </li>
          </ul>
        ) : (
          <ul className="tools__list ">
            <li className="tools__item">
              <img
                className="tools__image"
                src={ToolsIcon}
                alt="tools icon"
                onClick={handleClick}
              />
            </li>
          </ul>
        )}
      </div>
      <div className="tools-components">
        {toggleTimer && <Timer />}
        {togglePlayer && <MusicPlayer />}
        {toggleNotes && <Notes />}
      </div>
    </>
  );
}

export default Tools;
