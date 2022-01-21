import "../style/Landing.css";
import Header from "./Header";
import inviteOnly from "../assets/invite_only_landing.svg";
import hangingOutEasy from "../assets/hanging_out_easy_landing.svg";
import fandomLanding from "../assets/fandom_landing.svg";
import justChilling from "../assets/just_chiling_landing.svg";
import downloadIconWhite from "../assets/download_icon_white.svg";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="landing-item">
          <img src={inviteOnly} alt="" />
          <div className="landing-text">
            <h2>Create an invite-only place where you belong</h2>
            <p>
              Discord servers are organized into topic-based channels where you
              can collaborate, share and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>

        <div className="landing-item grey">
          <img src={hangingOutEasy} alt="" />
          <div className="landing-text">
            <h2>Where hanging out is easy</h2>
            <p>
              Grab a seat in a voice channel when you're free. Friends in your
              server can see you're around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>

        <div className="landing-item">
          <img src={fandomLanding} alt="" />
          <div className="landing-text">
            <h2>From few to a fandom</h2>
            <p>
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>

        <div className="landing-item last">
          <div className="landing-text last">
            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
            <p>
              Low latency voice and video feels like you're in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img src={justChilling} alt="" />
          <div className="landing-start-journey">
            <h2>Ready to start your journey?</h2>
            <button className="landing-btn">
              <img src={downloadIconWhite} />
              Download for Mac
            </button>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
