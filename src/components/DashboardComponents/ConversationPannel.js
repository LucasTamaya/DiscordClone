import stageDiscoveryIcon from "../../assets/stage_discovery.svg";
import nitroIcon from "../../assets/nitro_icon.svg";
import plusIcon from "../../assets/plus_icon.svg";
import friendsIcon from "../../assets/friends.svg";

const ConversationPannel = () => {
  return (
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
  );
};

export default ConversationPannel;
