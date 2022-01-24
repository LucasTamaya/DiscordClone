import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Server from "./components/Server";
import AlgorithmsChannel from "./components/ServerComponents/AlgorithmsChannel";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/server" element={<Server />}/>
        <Route path="/algorithms" element={<AlgorithmsChannel />}/>
      </Routes>
  );
}

export default App;
