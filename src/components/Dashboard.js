import "../style/Dashboard.css";
import DashboardIcons from "./DashboardComponents/DashboardIcons";
import ConversationPannel from "./DashboardComponents/ConversationPannel";
import DashboardBannerAndMain from "./DashboardComponents/DashboardBannerAndMain";

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <DashboardIcons />
      <ConversationPannel />
      <DashboardBannerAndMain />     
      
      
    </div>
  );
};

export default Dashboard;
