import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Login from './Component/Login';
import SignUp from './Component/SignUp';

import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container" style={{"marginTop":"60px"}}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/signup">
                <SignUp/>
              </Route>
            </Switch>
          </div>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
