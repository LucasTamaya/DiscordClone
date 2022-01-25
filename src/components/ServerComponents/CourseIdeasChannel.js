import ServersIcons from "./ServersIcons";
import ServersPannel from "./ServersPannel";
import Channel from "./Channel";
import SidebarChannel from "./SidebarChannel";

const CourseIdeasChannel = () => {

  return (
    <div className="dashboard-server-container">
      <ServersIcons />
      <ServersPannel />
      <Channel channelTitle="Course-ideas"/>
      <SidebarChannel />
    </div>
  );
};

export default CourseIdeasChannel;
