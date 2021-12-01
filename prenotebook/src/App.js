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
import Alert from './Component/Alert';

import SearchNote from './Component/SearchNote';


import NoteState from './Context/notes/NoteState';
import AlertState from './Context/notes/AlertState';
import BackState from './Context/notes/BackState';
import TermsCondition from './Component/TermsCondition';
import PrivacyPolicy from './Component/PrivacyPolicy';


function App() {
  if (window.location.hostname !== "prenotebook.ml"){
    window.location.replace("http://prenotebook.ml");
  }

  return (
    <div>
      <BackState>
      <NoteState>
      <AlertState>
        <Router>
          <Navbar />
          <div style={{"marginTop":"60px"}}>
            <Alert/>
          </div>
          <div className="container" style={{"marginTop":"30px"}}>
            <Switch >
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
              <Route exact path="/note/:id">
                <SearchNote/>
              </Route>
              <Route exact path="/terms-and-condition">
                <TermsCondition/>
              </Route> 
              <Route exact path="/privacy-policy">
                <PrivacyPolicy/>
              </Route> 
            </Switch>
          </div>
        </Router>
        </AlertState>
      </NoteState>
      </BackState>
    </div>
  );
}

export default App;
