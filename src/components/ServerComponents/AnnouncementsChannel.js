import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import Channel from "./Channel";
import SidebarChannel from "./SidebarChannel";

const AnnouncementsChannel = () => {

  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <Channel channelTitle="Announcements"/>
      <SidebarChannel />
    </div>
  );
};

export default AnnouncementsChannel;
