import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Footer = () => (
  <Router>
    <div>
      <img
        style={{
          width: "100%"
        }}
        src="http://international.visitjordan.com/content/images/jordanbanner.jpg"
        alt="sawsan"
      />
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="/">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="/about">
                    <i className="fa fa-angle-double-right"></i>About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="/contact">
                    <i className="fa fa-angle-double-right"></i>Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="">
                    <i style={{ color: "#ffebcd" }} className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i
                      style={{ color: "#ffebcd" }}
                      className="fab fa-twitter-square"
                    ></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i
                      style={{ color: "#ffebcd" }}
                      className="fab fa-instagram"
                    ></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i
                      style={{ color: "#ffebcd" }}
                      className="fab fa-google-plus-square"
                    ></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" target="_blank">
                    <i
                      style={{ color: "#ffebcd" }}
                      className="fa fa-envelope"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">
              <p>
                <u>Tajrobtak</u> is a registered project of the Coding Academy
                by Orange and is submitted under its restrections and
                requirements.
              </p>
              <p className="h6"> Rayy Team &copy; All right Reversed 2019</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
  </Router>
);
export default Footer;
