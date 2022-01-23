import "../style/Server.css";
import ServersIcons from "./ServerComponents/ServersIcons";
import ServersPannel from "./ServerComponents/ServersPannel";

const Server = () => {

    return (

        <div className="dashboard-server-container">
            <ServersIcons />
            <ServersPannel />

        </div>

    )

}

export default Server;