import "../../style/NoSelectedChannel.css";
import addFriendIcon from "../../assets/add_friend_icon.svg";

const NoSelectedChannel = () => {
  return (
    <div className="no-selected-container">
      <div className="no-selected-item">
        <img src={addFriendIcon} alt="no online friends icon" />
        <p>Open a channel and start chatting!</p>
      </div>
    </div>
  );
};

export default NoSelectedChannel;
