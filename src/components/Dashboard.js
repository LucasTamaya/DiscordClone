import "../style/Dashboard.css";
import discordLogo from "../assets/discord_logo.svg";
import newLine from "../assets/new_line.png";
import plusIcon from "../assets/plus.svg";
import compassIcon from "../assets/compass_icon.svg";
import downloadIcon from "../assets/download_icon_green.svg";

const Dashboard = () => {
  return (
    <div>
      <nav className="dashboard-nav">
        <ul className="dashboard-nav-container">
          <li>
            <img src={discordLogo} alt="discord logo" />
          </li>
          <li>
            <img src={newLine} alt="new line logo" />
          </li>
          <li>
            <div className="nav-img-container">
              <img src={plusIcon} alt="plus icon" />
            </div>
          </li>
          <li>
            <div className="nav-img-container">
              <img src={compassIcon} alt="compass icon" />
            </div>
          </li>
          <li>
            <div className="nav-img-container">
              <img src={downloadIcon} alt="download icon" />
            </div>
          </li>
        </ul>
      </nav>

      <div className="image"></div>
    </div>
  );
};

export default Dashboard;
