import closeIcon from "../../assets/close_icon.svg";
import discordLogo from "../../assets/discord_logo_red.svg";
import { Link, Outlet } from "react-router-dom";

const ServersPannel = () => {

  const closeServersPannel = () => {
    document.querySelector(".servers-container").style.left = "-100%";
  }

  return (
    <div className="servers-container">
      <div className="servers">
        <div className="new-line">
          <h3>newLine</h3>
          <img src={closeIcon} alt="close icon" onClick={closeServersPannel}/>
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
          <Link to="/server/algorithms" onClick={closeServersPannel}>
            algorithms
          </Link>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <Link to="/server/announcements" onClick={closeServersPannel}>
            announcements
          </Link>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <Link to="/server/blogging" onClick={closeServersPannel}>
            blogging
          </Link>
        </div>

        <div className="text-channels">
          <i className="fas fa-hashtag"></i>
          <Link to="/server/collaborators" onClick={closeServersPannel}>
            collaborators
          </Link>
        </div>

        <div className="text-channels">
          <i className="fas fa-hashtag"></i>
          <Link to="/server/course-ideas" onClick={closeServersPannel}>
            course-ideas
          </Link>
        </div>

        <div className="text-channels white">
          <i className="fas fa-hashtag"></i>
          <Link to="/server/machine-learning" onClick={closeServersPannel}> 
            machine learning
          </Link>
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
      <Outlet />
    </div>
  );
};

export default ServersPannel;
