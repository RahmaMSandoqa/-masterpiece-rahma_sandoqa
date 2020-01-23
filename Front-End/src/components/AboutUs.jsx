import React from "react";
import "./StyleAbout.css";
import Rahma from "./photo/rahma.jpg";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div className="team-section">
      <h1>Tourism</h1>
      <span className="border"></span>
      <div className="quotes">
        <p>
          There's something for everyone in Jordan...you just have to know where
          to look.
          <img
            width="50px"
            height="50px"
            src={require("../assets/spider.svg")}
          />
        </p>
      </div>

      <div className="ps">
        <a>
          <img src={Rahma} alt="rahma" />
        </a>
      </div>

      <div className="section" id="p2">
        <h6 className="name">Rahmah Sandoqa</h6>
        <span className="border"></span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>nn
      </div>
    </div>
  );
}
export default About;
