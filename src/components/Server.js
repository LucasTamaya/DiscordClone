import "../style/Server.css";
import NoSelectedChannel from "./ServerComponents/NoSelectedChannel";
import ServersIcons from "./ServerComponents/ServersIcons";
import ServersPannel from "./ServerComponents/ServersPannel";
import SidebarChannel from "./ServerComponents/SidebarChannel";

const Server = () => {
  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <NoSelectedChannel />
      <SidebarChannel />
    </div>
  );
};

export default Server;
