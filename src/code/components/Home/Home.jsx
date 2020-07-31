import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div id="bg-img" className="w3-blue-gray">
        <main id="home">
          <h1 className="lg-heading">
            D. <span className="text-secondary">Ganesh</span>
          </h1>
          <h2 className="sm-heading">Full Stack Developer</h2>
          <div class="icons">
            <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main>
        <footer id="main-footer">Copyright &copy; 2020</footer>
      </div>
    );
  }
}
