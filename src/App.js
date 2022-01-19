import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
