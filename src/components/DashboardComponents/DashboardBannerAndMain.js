import friendsIcon from "../../assets/friends.svg";
import noOnlineFriendsIcon from "../../assets/no_online_friends.svg";
import addFriendIcon from "../../assets/add_friend_icon.svg";
import { useState } from "react";

const DashboardBannerAndMain = () => {
  // cette variable me permet de faire afficher sois la section "add friend" sois "no friend"
  const [FriendSection, setFriendSection] = useState(false);

  const handleClick = () => {
    setFriendSection(!FriendSection);
    document.querySelector(".add-friend-btn").classList.toggle("active");
  };

  return (
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
        <button class="add-friend-btn" onClick={handleClick}>
          Add Friend
        </button>
      </div>

      <div className="dashboard-main-container">
        {/* si addFriendSection == true, on affiche la section 'add friend' */}
        {FriendSection ? (
          <div className="dashboard-main-left add-friend">
            <h3>ADD FRIEND</h3>
            <p>
              You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!
            </p>
            <div className="add-friend-input">
              <input type="text" placeholder="Enter a Username #0000" />
              <div className="add-friend-btn-container">
                <button type="submit">Send Friend Request</button>
              </div>
            </div>
            <div className="add-friend-img">
              <img src={addFriendIcon} alt="no online friends icon" />
              <p>Wumpus is waiting on friends. You don't have to though!</p>
            </div>
          </div>
        ) : (
          // sinon on affiche la section "no friend"
          <div className="dashboard-main-left">
            <img src={noOnlineFriendsIcon} alt="no online friends icon" />
            <p>No one's around to play with Wumpus.</p>
          </div>
        )}

        <div className="dashboard-main-right">
          <h3>Active Now</h3>
          <p>
            <span>It's quiet for now...</span>
          </p>
          <p>
            When a friend starts an activity like playing a game or hanging out
            on voice, we'll show it here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardBannerAndMain;
