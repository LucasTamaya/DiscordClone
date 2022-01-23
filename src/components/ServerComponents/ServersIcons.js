import discordLogo from "../../assets/discord_logo.svg";
import newLine from "../../assets/new_line.png";
import plus from "../../assets/plus.svg";
import compassIcon from "../../assets/compass_icon.svg";
import downloadIcon from "../../assets/download_icon_green.svg";
import threeDots from "../../assets/three_dot_icon.svg";
import { Link } from "react-router-dom";

const ServersIcons = () => {
  const openServersPannel = () => {
    document.querySelector(".servers-container").classList.toggle("disable");
  };

  return (
    <div className="dashboard-icons">
      <img src={discordLogo} alt="discord logo" />
      <Link to="/server"><img src={newLine} alt="new line logo" /></Link>
      <div className="dashboard-icons-container">
        <img src={plus} alt="plus icon" />
      </div>
      <div className="dashboard-icons-container">
        <img src={compassIcon} alt="compass icon" />
      </div>
      <div className="dashboard-icons-container">
        <img src={downloadIcon} alt="download icon" />
      </div>
      <div
        className="dashboard-icons-container"
        onClick={openServersPannel}
        id="three-dots-icon"
      >
        <img src={threeDots} alt="download icon" />
      </div>
    </div>
  );
};

export default ServersIcons;
