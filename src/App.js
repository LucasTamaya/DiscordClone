import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Server from "./components/Server";
import AlgorithmsChannel from "./components/ServerComponents/AlgorithmsChannel";
import AnnouncementsChannel from "./components/ServerComponents/AnnouncementsChannel";
import BloggingChannel from "./components/ServerComponents/BloggingCannel";
import CollaboratorsChannel from "./components/ServerComponents/CollaboratorsChannel";
import CourseIdeasChannel from "./components/ServerComponents/CourseIdeasChannel";
import MachineLearningChannel from "./components/ServerComponents/MachineLearningChannel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/server" element={<Server />} />
      <Route path="/server/algorithms" element={<AlgorithmsChannel />} />
      <Route path="/server/announcements" element={<AnnouncementsChannel />} />
      <Route path="/server/blogging" element={<BloggingChannel />} />
      <Route path="/server/collaborators" element={<CollaboratorsChannel />} />
      <Route path="/server/course-ideas" element={<CourseIdeasChannel />} />
      <Route path="/server/machine-learning" element={<MachineLearningChannel />} />
    </Routes>
  );
}

export default App;
