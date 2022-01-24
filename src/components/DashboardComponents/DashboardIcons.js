import discordLogo from "../../assets/discord_logo.svg";
import newLine from "../../assets/new_line.png";
import plus from "../../assets/plus.svg";
import compassIcon from "../../assets/compass_icon.svg";
import downloadIcon from "../../assets/download_icon_green.svg";
import threeDots from "../../assets/three_dot_icon.svg";
import { Link } from "react-router-dom";

const DashboardIcons = () => {
  const openConversationPannel = () => {
    document.querySelector(".conversation-pannel").classList.toggle("disable");
    document
      .querySelector(".dashboard-banner-and-main")
      .classList.toggle("disable");
  };

  return (
    <div className="dashboard-icons">
      <Link to="/"><img src={discordLogo} alt="discord logo" /></Link>
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
        onClick={openConversationPannel}
        id="three-dots-icon"
      >
        <img src={threeDots} alt="download icon" />
      </div>
    </div>
  );
};

export default DashboardIcons;
