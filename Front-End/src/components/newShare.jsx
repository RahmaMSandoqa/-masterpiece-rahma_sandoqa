import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { storage } from "../firebase";

class Share extends Component {
  state = {
    placeName: "",
    placeDescription: "",
    data: [],
    url: ""
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleName = event => {
    // console.log(event.target.value);
    this.setState({ placeName: event.target.value });
  };

  handleDescription = event => {
    this.setState({ placeDescription: event.target.value });
  };

  //==========================MOUNTING DATA FROM DB=============================//
  componentDidMount = () => {
    axios
      .get("http://localhost:20000/showBlog")
      .then(({ data }) => {
        this.setState({ data });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //==========================ADD DATA INTO DB=============================//
  addData = info => {
    console.log("ADD DATA");
    axios
      .post("http://localhost:20000/addData", info)
      .then(({ data }) => {
        // handle success
        console.log({ data });
        this.setState({ data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  addNewData = () => {
    const { state, addData } = this;
    const { placeName, placeDescription, url } = state;
    if (
      placeName !== "" &&
      placeName !== null &&
      placeDescription !== "" &&
      placeDescription !== null
    ) {
      let newData = {
        placeName: placeName,
        placeDescription: placeDescription,
        placePhoto: url
      };
      addData(newData);
      // this.setState({ placeName: "", placeDescription: "" });
    }
  };

  // ================================================================

  handleChange = e => {
    const image = e.target.files[0];
    this.setState(() => ({ image }));
  };

  fileUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      // snapshot => {
      //   const progress = Math.round(
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //   );
      //   this.setState({ progress });
      // },
      // error => {
      //   console.log(error);
      // },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
    console.log("url", image.url);
  };

  //==========================ROUTING AND COMPONENTS=============================//
  render() {
    const {
      state,
      handleSubmit,
      handleName,
      handleDescription,
      addNewData
    } = this;
    const { data, placeName, placeDescription } = state;

    //=======================
    console.log(this.state.url);
    const style = {
      // height: "100vh",
      // display: "flex",
      // flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    //======================
    return (
      <div>
        <h1>
          Share the joy{" "}
          <i style={{ color: "#ffebcd" }} className="far fa-heart"></i>
        </h1>
        <h4>
          Encourage others to visit and discover the places you've loved the
          most
        </h4>

        <br />
        {data.map((info, i) => {
          return (
            <div
              className="card ml-5"
              style={{
                width: "400px",
                height: "540px",
                marginTop: "50px",
                padding: "30px",
                display: "inline-block"
              }}
            >
              <img
                src={info.placePhoto}
                className="card-img-top"
                alt="Sights Photos"
                style={{ width: "338px", height: "338px" }}
              />
              <div className="card-header">
                <strong>Sight Name: </strong> {info.placeName}
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>Description: </strong> {info.placeDescription}
                </p>
              </div>
            </div>
          );
        })}
        <form className="container">
          <div className="form-group">
            <label className="font-weight-bold">Place name</label>
            <input
              className="form-control"
              type="text"
              value={placeName}
              onChange={handleName}
              placeholder=""
            />
          </div>

          <div className="form-group">
            <label className="font-weight-bold">What you want to share</label>
            <textarea
              className="form-control"
              rows="5"
              value={placeDescription}
              onChange={handleDescription}
            ></textarea>
          </div>
          <div className="form-group" style={style}>
            <input type="file" onChange={this.handleChange} />
            <button onClick={this.fileUpload}>UPLOAD</button>

            <br />
            <br />
            <br />
            <button type="submit" className="btn btn-warning" onClick={addNewData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Share;
