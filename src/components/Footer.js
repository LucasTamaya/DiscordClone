import { Link } from "react-router-dom";
import "../style/Footer.css";
import usaFlag from "../assets/usa_flag.png";
import twitterIcon from "../assets/twitter_icon.svg";
import instagramIcon from "../assets/instagram_icon.svg";
import facebookIcon from "../assets/facebook_icon.svg";
import youtubeIcon from "../assets/youtube_icon.svg";
import discordLogoWhite from "../assets/discord_mini_icon_white.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>IMAGINE A PLACE</h2>
          <div className="footer-country">
            <img src={usaFlag} alt="usa flag" />
            <p>English, USA</p>
          </div>
          <div className="footer-social-media">
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
            <img src={facebookIcon} alt="facebook icon" />
            <img src={youtubeIcon} alt="youtube icon" />
          </div>
        </div>

        <div className="footer-top-right">
          <div className="footer-product">
            <p>
              <span>Product</span>
            </p>
            <p>Download</p>
            <p>Nitro</p>
            <p>Status</p>
          </div>

          <div className="footer-company">
            <p>
              <span>Company</span>
            </p>
            <p>About</p>
            <p>Job</p>
            <p>Branding</p>
            <p>Newsroom</p>
          </div>

          <div className="footer-ressources">
            <p>
              <span>Ressources</span>
            </p>
            <p>Collapse</p>
            <p>Support</p>
            <p>Safety</p>
            <p>Blog</p>
            <p>Feedback</p>
            <p>Developers</p>
            <p>StreamKit</p>
          </div>

          <div className="footer-policies">
            <p>
              <span>Policies</span>
            </p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Guidelines</p>
            <p>Acknownledgements</p>
            <p>Licenses</p>
            <p>Moderation</p>
          </div>
        </div>
      </div>
      <div className="footer-separation"></div>
      <div className="footer-bottom">
        <div className="footer-discord-logo">
          <img src={discordLogoWhite} alt="discord logo" />
          <Link to="/">Discord</Link>
        </div>
        <div className="footer-sign-up">
            <button>Sign up</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
