import closeIcon from "../../assets/close_icon.svg";
import discordLogo from "../../assets/discord_logo_red.svg";
import {Link} from "react-router-dom";

const ServersPannel = () => {

    const openServersPannel = () => {
        document.querySelector(".servers-container").classList.toggle("disable");
        document.querySelector(".no-channels-selected").classList.toggle("disable");
    }

  return (
    <div className="servers-container">
      <div className="servers">
        <div className="new-line">
          <h3>newLine</h3>
          <img src={closeIcon} alt="close icon"/>
        </div>
        <div className="text-channels">
          <i className="fas fa-hashtag"></i>
          <p>rules</p>
        </div>

        <div className="text-channels title">
          <i className="fas fa-arrow-down"></i>
          <p>TEXT CHANNELS</p>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <Link to="/server/algorithms" onClick={openServersPannel}>algorithms</Link>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <p>announcements</p>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <p>blogging</p>
        </div>

        <div className="text-channels">
          <i className="fas fa-hashtag"></i>
          <p>collaborators</p>
        </div>

        <div className="text-channels">
          <i className="fas fa-hashtag"></i>
          <p>course-ideas</p>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <p>machine-learning</p>
        </div>
      </div>

      <div className="servers-bottom">

        <div className="servers-bottom-left">
          <img src={discordLogo} alt="discord logo" />
          <div>
            <p>
              <span>lucas</span>
            </p>
            <p>#8454</p>
          </div>
        </div>

        <div className="servers-bottom-right">
          <i className="fas fa-microphone-slash"></i>
          <i className="fas fa-headphones"></i>
          <i className="fas fa-cog"></i>
        </div>

      </div>
    </div>
  );
};

export default ServersPannel;
