import { Link } from "react-router-dom";
import discordLogoWhite from "../assets/discord_mini_icon_white.svg";
import discordLogoBlack from "../assets/discord_mini_icon_black.svg";
import "../style/Banner.css";

const Banner = () => {
  const openMenu = () => {
    document.querySelector(".menu").classList.toggle("disable");
  };

  const closeMenu = () => {
    document.querySelector(".menu").classList.toggle("disable");
  };

  return (
    <div className="banner">
      <div className="banner-left">
        <img src={discordLogoWhite} alt="discord logo" />
        <Link to="/">Discord</Link>
      </div>

      <div className="menu disable">
        <nav className="landing-nav">
          <div className="nav-top">
            <div className="discord-logo-nav">
              <img src={discordLogoBlack} alt="discord logo" />
              <p>Discord</p>
            </div>
            <i className="fas fa-times" onClick={closeMenu}></i>
          </div>
          <ul className="navigation">
            <li>Download</li>
            <li>Nitro</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </nav>
      </div>

      <div className="banner-right">
        <Link className="to-login-page" to="/login">
          Login
        </Link>
        <i className="fas fa-bars" id="open-menu" onClick={openMenu}></i>
      </div>
    </div>
  );
};

export default Banner;
