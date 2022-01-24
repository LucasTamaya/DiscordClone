import { useEffect } from "react";
import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import pinIcon from "../../assets/pin_icon.svg";

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
      </div>
    </div>
  );
};

export default AlgorithmsChannel;
