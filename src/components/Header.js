import "../style/Header.css";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Banner />
      <div className="header-text">
        <h1> IMAGINE A PLACE... </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it east to talk every day and
          hang out more often.
        </p>
      </div>

      <div className="discord-btn-container">
        <button className="discord-btn">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/download--v1.png" />
          Download for Mac
        </button>
        <button className="discord-btn open-browser">
          <Link to="/dashboard">Open Discord in your browser</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
