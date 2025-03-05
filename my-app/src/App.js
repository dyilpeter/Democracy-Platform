import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Polls from "./pages/Polls";
import Petitions from "./pages/Petitions";
import Volunteer from "./pages/Volunteer";
import LiveQA from "./pages/LiveQA";


const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/petitions" element={<Petitions />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/liveqa" element={<LiveQA />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
