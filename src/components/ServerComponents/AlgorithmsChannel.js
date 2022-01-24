import { useEffect } from "react";
import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import pinIcon from "../../assets/pin_icon.svg";
import waveToIcon from "../../assets/wave_to.png";
import giftBoxIcon from "../../assets/gift_box_icon.svg";
import gifIcon from "../../assets/gif_icon.svg";
import emojiIcon from "../../assets/emoji_icon.svg";

const AlgorithmsChannel = () => {
  useEffect(() => {
    document.querySelector(".servers-container").classList.toggle("disable");
  });

  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <div className="channel-section">
        <div className="channel-top">
          <div className="channel-top-left">
            <i className="fas fa-hashtag"></i>
            <h2>Algorithms</h2>
          </div>

          <div className="channel-top-right">
            <i className="fas fa-bell"></i>
            <img src={pinIcon} alt="pin icon" />
            <i className="fas fa-user-friends"></i>
          </div>
        </div>

        <div className="channel-bottom">
          <div className="wave-to">
            <img src={waveToIcon} alt="wave to icon" />
            <button>Wave to</button>
          </div>
          <div className="channel-input">
            <div className="channel-input-plus-icon">
              <i class="fas fa-plus"></i>
            </div>
            <input type="text" placeholder="Message #undefined" />
            <div className="channel-input-img">
              <img src={giftBoxIcon} alt="gift box icon" />
              <img src={gifIcon} alt="gif icon" />
              <img src={emojiIcon} alt="emoji icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <h1>Algo channel</h1>
  );
};

export default AlgorithmsChannel;
