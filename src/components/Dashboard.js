import "../style/Dashboard.css";
import discordLogo from "../assets/discord_logo.svg";
import newLine from "../assets/new_line.png";
import plus from "../assets/plus.svg";
import compassIcon from "../assets/compass_icon.svg";
import downloadIcon from "../assets/download_icon_green.svg";
import threeDots from "../assets/three_dot_icon.svg";
import friendsIcon from "../assets/friends.svg";
import stageDiscoveryIcon from "../assets/stage_discovery.svg";
import nitroIcon from "../assets/nitro_icon.svg";
import plusIcon from "../assets/plus_icon.svg";
import noOnlineFriendsIcon from "../assets/no_online_friends.svg";

const Dashboard = () => {
  const openConversationPannel = () => {
    document.querySelector(".conversation-pannel").classList.toggle("disable");
    document.querySelector(".dashboard-banner-and-main").classList.toggle("disable");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-icons">
        <img src={discordLogo} alt="discord logo" />
        <img src={newLine} alt="new line logo" />
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
        >
          <img src={threeDots} alt="download icon" />
        </div>
      </div>

      <div className="conversation-pannel disable">
        <input type="text" placeholder="Find or start a conversation" />
        <div className="conversation-pannel-item friends">
          <img src={friendsIcon} alt="friends icon" />
          <p>
            <span>Friends</span>
          </p>
        </div>
        <div className="conversation-pannel-item">
          <img src={stageDiscoveryIcon} alt="stage discovery icon" />
          <p>Stage Discovery</p>
        </div>
        <div className="conversation-pannel-item">
          <img src={nitroIcon} alt="nitro icon" />
          <p>Nitro</p>
        </div>
        <div className="dm-text-container">
          <h4>DIRECT MESSAGES</h4>
          <img src={plusIcon} alt="plus icon" />
        </div>
        <div className="empty-dm-list"></div>
      </div>

      <div className="dashboard-banner-and-main">

        <div className="dashboard-banner">
          <div className="banner-friends-container">
            <img src={friendsIcon} alt="friends icon" />
            <p>Friends</p>
          </div>
          <p>Online</p>
          <p>All</p>
          <p>Pending</p>
          <p>Blocked</p>
          <button>Add Friend</button>
        </div>

        <div className="dashboard-main">
          <img src={noOnlineFriendsIcon} alt="no online friends icon" />
          <p>No one's around to play with Wumpus.</p>
        </div>
        
      </div>

      {/* <div className="image">

      </div> */}
    </div>
  );
};

export default Dashboard;
