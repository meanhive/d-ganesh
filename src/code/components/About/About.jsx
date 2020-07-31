import React, { Component } from "react";
import { myBg } from "../../helpers/images/index";
import { Link } from "react-router-dom";

export default class About extends Component {
  state = {
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Jquery",
      "ReactJS",
      "Angular-9(2+)",
      "NodeJS",
      "ExpressJS",
    ],
  };
  render() {
    return (
      <div>
        <main id="about" className="w3-blue-gray">
          <h1 className="lg-heading">
            About
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">
            Great things are done by a series of small things brought together
          </h2>
          <div className="about-info">
            <img src={myBg[0]} alt="John Doe" className="bio-image" />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                I'm an Indian Full Stack Developer with significant experience
                with classic backend stacks and front-end frameworks including
                {this.state.tech.map((item, key) => {
                  return <strong key={key}> {item}, </strong>;
                })}
              </p>
              <p>
                I also work extensively with Core-Php, Advance Php Frameworks
                like <strong>(Code Igniter, Laravel)</strong> with Vue front-end
                framework and Content Management Systems like{" "}
                <strong>WordPress</strong>.
              </p>
              <p>
                I advocate for open source, try to keep things
                <abbr title="Don't Repeat Yourself"> DRY </abbr> and
                well-documented and when possible, I adhere to the principles of
                <a href="http://12factor.net">
                  <strong> 12 factor </strong>
                </a>
                development.
              </p>
              <p>
                {/* <a className="btn" href="http://">
                  <i className="fas fa-file-pdf"></i> My Resume
                </a>*/}
                <p>
                  I'm Constantly experimenting with new GitHub libraries and
                  coding techniques. Click here to see some of my all-time
                  favorites.
                </p>
                <Link className="btn" to="/work">
                  <i className="fas fa-folder-open"></i> Sample Code
                </Link>
              </p>
            </div>

            <div className="job job-1">
              <h3>Kian Infotech.</h3>
              <h6>Full Stack Developer</h6>
              <p>2011-2014</p>
            </div>

            <div className="job job-2">
              <h3>Legitwise Technologies</h3>
              <h6>Full Stack Developer</h6>
              <p>2015-2018</p>
            </div>

            <div className="job job-3">
              <h3>Be-Practical Tech Solutions</h3>
              <h6>Full Stack Developer </h6>
              <p>2018-present</p>
            </div>
          </div>
        </main>

        <main id="about">
          <div className="about-info">
            <div className="job job1">
              <h3>Front End Technologies</h3>
              HTML5
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-deep-orange w3-center"
                  style={{ width: "98%" }}
                >
                  98%
                </div>
              </div>
              <br />
              CSS & Pre-Processors (SCSS,LESS,Stylus)
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-blue w3-center"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
              <br />
              JavaScript
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-yellow w3-center"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              <br />
              Jquery
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-indigo w3-center"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              <br />
              bootstrap 3 or 4
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-deep-purple w3-center"
                  style={{ width: "95%" }}
                >
                  95%
                </div>
              </div>
              <br />
              Angular -9 (2+)
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-red w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <br />
              React JS & Redux
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-cyan w3-center"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="job job2">
              <h3>Server Side Scripts</h3>
              Node JS
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-light-green w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <br />
              Express Js
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-grey w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <br />
              Core Php & OOPS
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-deep-purple w3-center"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              <br />
              Laravel
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-red w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <br />
              <br />
              <h3>Content Management Systems</h3>
              WordPress
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-blue w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="job job3">
              <h3>Databases</h3>
              MongoDB
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-green w3-center"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              <br />
              MySqL
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-orange w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <br />
              MS-SqL Server
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-red w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <br />
              <br />
              <h3>Hybrid Frameworks</h3>
              Ionic 5
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-blue w3-center"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
              <br />
              React Native
              <div className="w3-light-grey">
                <div
                  className="w3-container w3-cyan w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer id="main-footer">Copyright &copy; 2020</footer>
      </div>
    );
  }
}
