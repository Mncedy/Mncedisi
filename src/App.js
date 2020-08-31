import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "./assets/navBar";
import Home from "./Pages/home";
import Project from "./Pages/project";
import About from "./Pages/about";
import Contact from "./Pages/contact";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
