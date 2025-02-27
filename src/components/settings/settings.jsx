import SettingsIcon from "../../assets/icons/setting.svg";
import "./settings.scss";

function Settings() {
  return (
    <>
      <img
        className="settings__image"
        src={SettingsIcon}
        alt="settings icon"
      ></img>
    </>
  );
}

export default Settings;
