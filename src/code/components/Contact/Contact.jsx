import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <main id="contact" className="w3-blue-gray">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">This is how you can reach me...</h2>
          <div className="boxes">
            <div>
              <span className="text-secondary">Email: </span>{" "}
              ganeshacademy@zoho.com
            </div>
            <div>
              <span className="text-secondary">Phone: </span> (+91) 94828-55864
            </div>
            <div>
              <span className="text-secondary">Address: </span> Rajaji Nagar,
              Bengaluru-86.
            </div>
          </div>
        </main>

        <footer id="main-footer">Copyright &copy; 2020</footer>
      </div>
    );
  }
}
