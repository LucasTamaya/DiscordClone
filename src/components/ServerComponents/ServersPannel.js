import closeIcon from "../../assets/close_icon.svg";
import discordLogo from "../../assets/discord_logo_red.svg";

const ServersPannel = () => {

    const openServersPannel = () => {
        document.querySelector(".servers-container").classList.toggle("disable");
    }

  return (
    <div className="servers-container">
      <div className="servers">
        <div className="new-line">
          <h3>newLine</h3>
          <img src={closeIcon} alt="close icon" onClick={openServersPannel}/>
        </div>
        <div className="text-channels">
          <i class="fas fa-hashtag"></i>
          <p>rules</p>
        </div>

        <div className="text-channels title">
          <i class="fas fa-arrow-down"></i>
          <p>TEXT CHANNELS</p>
        </div>

        <div className="text-channels white">
          <i class="fas fa-hashtag"></i>
          <p>algorithms</p>
        </div>

        <div className="text-channels white">
          <i class="fas fa-hashtag"></i>
          <p>announcements</p>
        </div>

        <div className="text-channels white">
          <i class="fas fa-hashtag"></i>
          <p>blogging</p>
        </div>

        <div className="text-channels">
          <i class="fas fa-hashtag"></i>
          <p>collaborators</p>
        </div>

        <div className="text-channels">
          <i class="fas fa-hashtag"></i>
          <p>course-ideas</p>
        </div>

        <div className="text-channels white">
          <i class="fas fa-hashtag"></i>
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
          <i class="fas fa-microphone-slash"></i>
          <i class="fas fa-headphones"></i>
          <i class="fas fa-cog"></i>
        </div>

      </div>
    </div>
  );
};

export default ServersPannel;
