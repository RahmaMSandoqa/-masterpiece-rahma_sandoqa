//=======================================================================//
import React from "react";
import video from "../j.mp4";
import "./yaser.css";
import man from "../mann.png";
import woman from "../woman.png";
import discover from "../hehe.png";
import { Link } from "react-router-dom";
//==========================Landing Component============================//
const Home = () => (
  <div>
    {/* ====================START : BACKGROUND VIDEO======================= */}
    <header className="v-header container">
      <div className="fullscreen-video-wrap">
        <video src={video} autoPlay loop muted></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content text-md-center">
        <h1>Welcome to Jordan</h1>
        <p>
          Jordan is the home for those who believe in love, peace and friendship
          regardless of their race, gender or religion. Jordan is the land of
          legends, history and hospitality that offers its visitors a rich
          legacy of natural beauty and historical lore.
        </p>
      </div>
    </header>
    {/* ======================END : BACKGROUND VIDEO======================= */}
    <br />
    <br />
    <br />
    {/* ========================START : THREE ICONS========================= */}

    <div className="container-fluid  text-center m-auto">
      <div className="row">
        <div className="col-6 col-sm-6">
          <Link to="/showcase" style={{ textDecoration: "none" }}>
            <h1>
              <i className="far fa-compass twoIcons "></i>
            </h1>
            <h2 className="twoSent">Places to discover</h2>
          </Link>
        </div>
        <div className="col-6 col-sm-6">
          <Link to="/share" style={{ textDecoration: "none" }}>
            <h1>
              <i className="far fa-laugh-beam twoIcons "></i>
            </h1>
            <h2 className="twoSent">Share your experience in Jordan</h2>
          </Link>
        </div>
      </div>
    </div>
    {/* ==========================END : THREE ICONS========================== */}
    <br />
    <br />
    <br />
    {/* =========================START : MAN & WOMAN========================= */}
    <section>
      <div>
        <img alt="man with coffee" className="man" src={man} />
        <h4 className="descMan hehe">
          The true taste of hospitality with you wherever you go
        </h4>
      </div>
      <div className="clear"></div>
    </section>
    <section>
      <div>
        <div>
          <img alt="woman in dead sea mud" className="camel " src={woman} />
          <h4 className="descCamel hehe">
            Local healthcare from the core of nature
          </h4>
        </div>
      </div>
    </section>
    <div className="clear"></div>
    {/* ==========================END : MAN & WOMAN========================== */}
    <br />
    <br />
  </div>
);

export default Home;
