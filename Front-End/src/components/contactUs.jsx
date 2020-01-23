import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: null,
      email: null,
      phone: null,
      message: null,
      warning: null,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const newState = {}
    newState[ev.target.name] = ev.target.value;
    this.setState(newState)
  }


contactUS=()=>{
  // let name= event.target["name"].value
  // let email= event.target["email"].value
  // let phone= event.target["phone"].value
  // let massage= event.target["message"].value
  // let all ={name,email,massage,phone}
  console.log('contact', this.state)
  axios.post("http://localhost:20000/contactUS", this.state)
  .then(res=>{
    console.log(res.data)
  })
  this.props.history.push("")
  
}

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${"https://image.shutterstock.com/image-photo/light-colorful-background-beautiful-bright-260nw-1386218081.jpg"})`,
          backgroundRepeat: "no-repeat",
          marginTop:"-30px",
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center "
        }}
      >
        <div className={this.style.sectionContent}></div>
        <div className={this.style.contactSection}>
          <div className="container">
            <div className="row">
              <form onSubmit={this.contactUS} className="col-md-6 offset-md-3  mt-5">
                <h1 className={this.style.contentHeader}>
                  <b>Contact us</b>
                </h1>
                <div className="mb-5"></div>

                <div className=" form-line">
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername">
                      <b>Your name</b>
                    </label>
                    <input 
                      name="name"
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=" Enter Name"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail">
                      <b>Email Address</b>
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      // id="exampleInputEmail"
                      placeholder=" Enter Email"
                      onChange={this.onChange}
                      multiple
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telephone">
                      <b>Mobile</b>{" "}
                    </label>
                    <input
                      name ="phone"
                      type="tel"
                      className="form-control"
                      id="telephone"
                      placeholder="number"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="form-group">
                    <label htmlFor="description">
                      {" "}
                      <b>Message</b>
                    </label>
                    <textarea
                      // minlength="4" 
                      // maxlength="8"
                      name ="message"
                      className="form-control"
                      id="description"
                      placeholder="Enter Your Message"
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-info" >
                      <i className="fa fa-paper-plane" aria-hidden="true"></i> Send
                      Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  style = {
    /*Contact sectiom*/
    contentHeader: {
      fontFamily: "Oleo Script cursive",
      color: "#fcc500",
      fontSize: "45px"
    },

    sectionContent: {
      textAlign: "center"
    },
    contact: {
      fontFamily: "Teko, sans-serif",
      paddingTop: "60px",
      width: "100%",
      width: "100vw",
      height: "550px",
      background: "#3a6186" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to left, #3a6186 , #89253e)" /* Chrome 10-25, Safari 5.1-6 */,
      background:
        "linear-gradient(to left, #3a6186 , #89253e)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      color: "#fff"
    },
    contactSection: {
      paddingTop: "40px"
    },
    contactSection: {
      width: "50%"
    },

    formLine: {
      borderRight: "1px solid #B29999"
    },

    formGroup: {
      marginTop: "10px"
    },
    Label: {
      fontSize: "1.3em",
      lineHeight: "1em",
      fontWeight: "normal"
    },
    formControl: {
      fontSize: "1.3em",
      color: "#080808"
    },
    textareaFormcontrol: {
      height: "135px"
    },

    submit: {
      fontSize: "1.1em",
      float: "right",
      width: "150px",
      backgroundColor: "transparent",
      color: "fff"
    }
  };
}
