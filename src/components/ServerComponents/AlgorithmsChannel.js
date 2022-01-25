import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import Channel from "./Channel";
import SidebarChannel from "./SidebarChannel";

const AlgorithmsChannel = () => {

  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <Channel channelTitle="Algorithms"/>
      <SidebarChannel />
    </div>
  );
};

export default AlgorithmsChannel;
