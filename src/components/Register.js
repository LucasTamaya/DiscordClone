import "../style/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import discordLogoWhite from "../assets/discord_mini_icon_white.svg";
const axios = require("axios"); //facilite les requêtes vers nos api

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Envoit de la data depuis notre frontend vers notre backend
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        email: email,
        username: username,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <main className="login-bg">
      <div className="register-container">
        <Link className="discord-logo-container register" to="/">
          <img src={discordLogoWhite} alt="discord logo" />
          <p>Discord</p>
        </Link>

        <div className="register-text">
          <h3>Create an account</h3>
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
            <label>USERNAME</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <button type="submit" className="login-btn" onClick={handleRegister}>
            Continue
          </button>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
    </main>
  );
};

export default Register;
