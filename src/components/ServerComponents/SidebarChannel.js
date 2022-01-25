import "../../style/SidebarChannel.css";
import inboxIcon from "../../assets/inbox_icon.svg";
import questionIcon from "../../assets/question_mark_icon.svg";
import discordIcon from "../../assets/discord_mini_icon_white.svg";
import { v4 as uuidv4 } from 'uuid';

const SidebarChannel = () => {
  const jokerRepeat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-top-input">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <img src={inboxIcon} alt="inbox icon" />
        <img src={questionIcon} alt="question icon" />
      </div>

      <div className="sidebar-bottom">
        <h3>Online - 3</h3>
        <div className="sidebar-bottom-item">
          <div className="discord-icon-container">
            <img src={discordIcon} alt="discord icon" />
          </div>
          <p>lucas</p>
          <i className="fas fa-crown"></i>
        </div>

        <div className="sidebar-bottom-item">
          <div className="discord-icon-container green">
            <img src={discordIcon} alt="discord icon" />
          </div>
          <p>Batman</p>
        </div>
        {/* Va répéter ce pattern selon le nombre d'item dans la liste jokerRepeat */}
        {jokerRepeat.map((x) => (
          <div className="sidebar-bottom-item" key={uuidv4()}>
            <div className="discord-icon-container yellow">
              <img src={discordIcon} alt="discord icon" />
            </div>
            <p>[x]joker[x]</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarChannel;
