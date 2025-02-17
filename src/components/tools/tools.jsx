import "./tools.scss";
import { useState } from "react";
import ToolsIcon from "../../assets/icons/menu.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import ListIcon from "../../assets/icons/list.svg";
import NotesIcon from "../../assets/icons/notes.svg";
import MusicIcon from "../../assets/icons/music-note.svg";
import Timer from "../timer/timer";

function Tools() {
  const [toggle, setToggle] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);

  const handleHover = () => {
    setToggle((prev) => !prev);
  };
  const handleTimerClick = () => {
    setToggleTimer((prev) => !prev);
  };

  return (
    <>
      <div className="tools-container">
        {toggle ? (
          <div className="tools">
            <ul className="tools__list">
              <li className="tools__item">
                <img
                  className="tools__image"
                  src={ToolsIcon}
                  alt="tools icon"
                  onMouseOver={handleHover}
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
                />
              </li>
              <li className="tools__item ">
                <img
                  className="tools__image tools__image--active"
                  src={MusicIcon}
                  alt="Music icon"
                />
              </li>
            </ul>
          </div>
        ) : (
          <div className="tools">
            <ul className="tools__list ">
              <li className="tools__item">
                <img
                  className="tools__image"
                  src={ToolsIcon}
                  alt="tools icon"
                  onMouseOver={handleHover}
                />
              </li>
              <li className="tools__item">
                <img
                  className="tools__image tools__image--hidden"
                  src={ClockIcon}
                  alt="clock icon"
                />
              </li>
              <li className="tools__item">
                <img
                  className="tools__image tools__image--hidden"
                  src={ListIcon}
                  alt="list icon"
                />
              </li>
              <li className="tools__item">
                <img
                  className="tools__image tools__image--hidden"
                  src={NotesIcon}
                  alt="notes icon"
                />
              </li>
              <li className="tools__item">
                <img
                  className="tools__image tools__image--hidden"
                  src={MusicIcon}
                  alt="Music icon"
                />
              </li>
            </ul>
          </div>
        )}
        {toggleTimer ? (
          <>
            <Timer />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Tools;
