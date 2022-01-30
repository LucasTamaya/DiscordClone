import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import discordLogo from "../../assets/discord_logo_red.svg";
import pinIcon from "../../assets/pin_icon.svg";
import waveToIcon from "../../assets/wave_to.png";
import giftBoxIcon from "../../assets/gift_box_icon.svg";
import gifIcon from "../../assets/gif_icon.svg";
import emojiIcon from "../../assets/emoji_icon.svg";

const Channel = ({ channelTitle }) => {
  // nom de l'utilisateur
  const user = "lucas";

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Récupère l'input
  const getInput = (e) => {
    setInput(e.target.value);
  };

  // Envoit l'input dans le tableau des messages
  const sendMessage = () => {
    // on vérifie que l'input n'est pas vide
    if (input.length > 0) {
      // on copie les anciennes valeurs du tableau 'messages' et on lui ajoute le nouveau input
      setMessages([...messages, input]);
      // on remet l'input à une string vide
      setInput("");
    } else {
      // ne rien faire
    }
  };

  // Envoit l'input dans le tableau des messages si on appuie sur la touche entrée
  const onEnterKey = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    } else {
      //ne rien faire
    }
  };

  // TEST ////////////////////////////////////////
  // useEffect(() => {
  //   console.log("input", input);
  //   console.log("input type: ", typeof input);
  //   console.log("messages", messages);
  // });

  return (
    <div className="dashboard-server-container">
      <div className="channel-section">
        <div className="channel-top">
          <div className="channel-top-left">
            <i className="fas fa-hashtag"></i>
            <h2>{channelTitle}</h2>
          </div>

          <div className="channel-top-right">
            <i className="fas fa-bell"></i>
            <img src={pinIcon} alt="pin icon" />
            <i className="fas fa-user-friends"></i>
          </div>
        </div>

        {/* si le tableau messages contient un ou plusieurs messages, on les affiches */}
        {messages.length > 0 ? (
          <div className="channel-center">
            {messages.map((message) => (
              <div key={uuidv4()} className="channel-center__item">
                <img className="channel-center__img" src={discordLogo} alt="discord logo" />
                <div className="channel-center__text">
                  <p className="channel-center__text__user">{user} <span>{new Date().toLocaleDateString(undefined)}</span></p>
                  <p className="channel-center__text__message">{message}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // sinon, on afficher rien
          <div></div>
        )}

        <div className="channel-bottom">
          <div className="wave-to">
            <img src={waveToIcon} alt="wave to icon" />
            <button>Wave to</button>
          </div>
          <div className="channel-input">
            <div className="channel-input-plus-icon">
              <i className="fas fa-plus"></i>
            </div>
            <input
              type="text"
              value={input}
              placeholder="Message #undefined"
              onChange={getInput}
              onKeyDown={onEnterKey}
            />
            <button onClick={sendMessage}>Send</button>
            <div className="channel-input-img">
              <img src={giftBoxIcon} alt="gift box icon" />
              <img src={gifIcon} alt="gif icon" />
              <img src={emojiIcon} alt="emoji icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
