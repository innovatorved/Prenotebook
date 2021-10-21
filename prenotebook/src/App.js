import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from './Component/Navbar'
import './App.css'
import Login from "./Component/Login";

function App() {
  return (
    <div className="App font-link">
      <Navbar/>
    <Router>
      <Route exact path="/login">
        <Login/>
      </Route>
    </Router>
    </div>
  );
}

export default App;
