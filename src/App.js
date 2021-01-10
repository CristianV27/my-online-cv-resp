import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Resume } from "./Pages/Resume/Resume";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Hobbies } from "./Pages/Hobbies/Hobbies";
import { Contact } from "./Pages/Contact/Contact";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>  
        </Switch>
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
