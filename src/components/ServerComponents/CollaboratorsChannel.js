import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import Channel from "./Channel";
import SidebarChannel from "./SidebarChannel";

const CollaboratorsChannel = () => {

  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <Channel channelTitle="Collaborators"/>
      <SidebarChannel />
    </div>
  );
};

export default CollaboratorsChannel;
