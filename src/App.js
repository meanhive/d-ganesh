import React from "react";
import "./css/main.css";
import "./main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./code/components/Home/Home";
import About from "./code/components/About/About";
import Contact from "./code/components/Contact/Contact";
import Work from "./code/components/Work/Work";
import Nav from "./code/components/Menu/Nav";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
