import React, { Component } from "react";
import video from "../video/back.mp4";
import Body from "./Body";
import Header from "./Header";
import "./myCss.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bloc">
          <video src={video} autoPlay={true} muted={true} loop={true}></video>
          <Header />
          <Body />
        </div>
      </div>
    );
  }
}

export default Home;
