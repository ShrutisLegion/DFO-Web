import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Block from "./Block";
import Database from "./Database";
import LandingPage from "./LandingPage";
import Admin from "./Admin";

function App() {
  return (
    <>
      <Router>
        <Routes basename="/DFO-Bot">
          <Route exact path="/DFO-Bot" element={<LandingPage />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/DFO-Bot/Home" element={<Home />} />
          <Route path="/Block/:tehsilName" element={<Block />} />
          <Route
            path="/Database/:tehsilName/:blockName"
            element={<Database />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
