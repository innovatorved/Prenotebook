import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Alert from "./Component/Alert";
import Mynote from "./Component/Mynote";
import SearchNote from "./Component/SearchNote";
import NoteState from "./Context/notes/NoteState";
import AlertState from "./Context/notes/AlertState";
import BackState from "./Context/notes/BackState";
import TermsCondition from "./Component/TermsCondition";
import PrivacyPolicy from "./Component/PrivacyPolicy";

function App() {
  return (
    <div>
      <BackState>
        <NoteState>
          <AlertState>
            <Router>
              <Navbar />
              <div style={{ marginTop: "60px" }}>
                <Alert />
              </div>
              <div className="container" style={{ marginTop: "30px" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/note/:id" element={<SearchNote />} />
                  <Route path="/mynote/:id" element={<Mynote />} />
                  <Route
                    path="/terms-and-condition"
                    element={<TermsCondition />}
                  />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </div>
            </Router>
          </AlertState>
        </NoteState>
      </BackState>
    </div>
  );
}

export default App;
