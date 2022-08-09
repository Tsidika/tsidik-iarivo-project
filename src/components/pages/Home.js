import React, { Component } from "react";
import video from "../../video/back.mp4";
import Body from "../Body";
import Footer from "../Footer";
import Header from "../Header";
import "../myCss.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <video src={video} autoPlay={true} muted={true} loop={true}></video>
        <div className="bloc">
          <Header />
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
