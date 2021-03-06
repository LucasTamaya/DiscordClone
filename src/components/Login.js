import "../style/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import discordLogoWhite from "../assets/discord_mini_icon_white.svg";
const axios = require("axios");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

  return (
    <main className="login-bg">
      <div className="login-container">
        <Link className="discord-logo-container login" to="/">
          <img src={discordLogoWhite} alt="discord logo" />
          <p>Discord</p>
        </Link>

        <div className="login-laptop-left">
          <div className="login-text">
            <h3>Welcome back!</h3>
            <p>We're exited to see you again!</p>
          </div>

          <form>
            <div>
              <label>EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p>
              <span>Forgot your password?</span>
            </p>

            <button type="submit" className="login-btn" onClick={handleLogin}>
              Login
            </button>
            <p>
              Need an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>

        <div className="login-laptop-right">
          <div className="qr-code"></div>
          <h2>Log in with QR Code</h2>
          <p>
            Scan this with the <span>Discord mobile app</span> to log in
            instantly.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
