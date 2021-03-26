import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Services";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        
        <Route path="/contact" component={Contact} exact />
        <Route path="/services" component={Service} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </>
  );
};

export default App;
