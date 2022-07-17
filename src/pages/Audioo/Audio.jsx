import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "react-h5-audio-player/lib/styles.css";
import { BarIcon, LeftIcon } from "../../components/Icon";
import AudioImg from "../../components/Popup/AudioImg";
import Popup from "../../components/Popup/Popup";
import "./Audio.scss";

function Audio() {
  const [showPopup, setShowPopup] = useState(false);
  const handleHide = () => {
    if (showPopup) {
      setShowPopup(false);
    }
  };
  return (
    <div className="audio">
      <div className="audio-overlay" onClick={handleHide}></div>
      <div className="audio-btn">
        <LeftIcon width="30" height="30" />
        <div className="audio-btn__dropdown">
          <BarIcon
            width="30"
            height="30"
            onClick={() => setShowPopup(!showPopup)}
          />
          {showPopup && <Popup />}
        </div>
      </div>
      <div className="audio-content">
        <div className="audio-content__img">
          <AudioImg />
        </div>
        <div className="audio-content__player">
          <AudioPlayer
            src="https://file.mentor.vn/files/books/lesson/file-1636628311945.mp3"
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}

export default Audio;
