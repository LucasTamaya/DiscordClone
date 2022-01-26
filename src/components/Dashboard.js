import "../style/Dashboard.css";
import DashboardIcons from "./DashboardComponents/DashboardIcons";
import DashboardSidebar from "./DashboardComponents/DashboardSidebar";
import DashboardBannerAndMain from "./DashboardComponents/DashboardBannerAndMain";

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <DashboardIcons />
      <DashboardSidebar />
      <DashboardBannerAndMain />           
    </div>
  );
};

export default Dashboard;
