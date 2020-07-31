import React, { Component } from "react";
import { myWork } from "../../helpers/images/index";

export default class Work extends Component {
  render() {
    return (
      <div>
        <main id="work" className="w3-blue-gray">
          <h1 className="lg-heading">
            My <span className="text-secondary">Works</span>
          </h1>
          <h2 className="sm-heading">Check out some of my Works</h2>
          <div className="projects">
            {myWork.map((data, key) => {
              return (
                <div className="item" key={key}>
                  <a href={data.preview_uri}>
                    <h2> {data.title} </h2>
                    <img src={data.image} alt={data.title} />
                  </a>
                  <a href={data.preview_uri} className="btn-light">
                    <i className="fas fa-eye"></i> Live demo
                  </a>
                  <a href={data.git_uri} className="btn-dark">
                    <i className="fab fa-github"></i> git hub source
                  </a>
                </div>
              );
            })}
          </div>
        </main>
        <footer id="main-footer">Copyright &copy; 2020.</footer>
      </div>
    );
  }
}
