import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Admindash from "./components/Admaindash";
import Footer from "./components/Footer";
import GridContainer from "./components/GridContainer";
import ShowPage from "./components/ShowPage";
import Share from "./components/newShare";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/AboutUs";
import axios from "axios";
import Header from "./components/Header";
import Contact from "./components/contactUs";
//================================IMPORTS=====================================//
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  //==========================MOUNTING DATA FROM DB=============================//
  componentDidMount() {
    axios
      .get("http://localhost:20000/showcase")
      .then(({ data }) => {
        this.setState({ data });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  //==========================ROUTING AND COMPONENTS=============================//
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Showcase"
            render={props => (
              <GridContainer {...props} data={this.state.data} />
            )}
          />
          <Route exact path="/place/:id" component={ShowPage} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Admindash" component={Admindash} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
