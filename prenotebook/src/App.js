import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';

import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
        <Router>
          <Navbar/>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
