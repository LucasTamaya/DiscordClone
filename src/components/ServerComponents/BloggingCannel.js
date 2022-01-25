import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import Channel from "./Channel";
import SidebarChannel from "./SidebarChannel";

const BloggingChannel = () => {

  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <Channel channelTitle="Blogging"/>
      <SidebarChannel />
    </div>
  );
};

export default BloggingChannel;
