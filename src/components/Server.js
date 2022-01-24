import "../style/Server.css";
import ServersIcons from "./ServerComponents/ServersIcons";
import ServersPannel from "./ServerComponents/ServersPannel";

const Server = () => {
  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <div className="no-channels-selected disable">
          <h1>So channels selected yet</h1>
      </div>
    </div>
  );
};

export default Server;
