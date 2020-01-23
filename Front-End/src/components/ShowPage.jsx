//======================================================================//
import React, { Component } from "react";
import axios from "axios";
import Map from "./Map";
import WeatherContainer from "./WeatherContainer";
//==================DESCRIPTION AND MAP CONTAINER=======================//
class ShowPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  //===============SLICING ID FROM URL + MOUNTING DATA====================//
  componentDidMount() {
    let id = window.location.pathname.slice(7);
    axios
      .get(`http://localhost:20000/place/${id}`)
      .then(({ data }) => {
        this.setState({ data });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  //======================================================================//
  render() {
    const { name, photosUrl, description } = this.state.data;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-6">
              <div
                className="card  text-center border-light mb-3"
                style={{
                  width: "100%",
                  height: "900px",
                  padding: "20px",
                  float: "left"
                }}
              >
                <img src={photosUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    Description :<br /> {description}
                  </p>
                  <WeatherContainer name={name} />
                </div>
              </div>
            </div>
            <div className="card  text-center border-light mb-3 col-6 col-md-6">
              <Map name={name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPage;
