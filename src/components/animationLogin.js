import React, { Component } from "react";
import "./containerAnimation.css";
import image from "../images/login1.png";
import Icon1 from "../images/1.png";
import Icon2 from "../images/Reserver.png";

export class AnimationLogin extends Component {
  constructor(props) {
    super(props);
    this.myTitle = React.createRef();
    console.log(this.myTitle);
  }

  componentDidMount() {
    // this.myTitle.current.style.backgroundImage = `url("${Icon2}")`;
  }
  render() {
    return (
      <div className="conatainerAnimation">
        <div className="contentAnimation">
          <img
            src={image}
            alt=""
            srcset=""
            style={{ width: "353px", height: "504px" }}
          />
        </div>
        <div className="icons">
          <div className="icon1" id="icon1">
            <img src={Icon1} alt="" srcSet="" />
          </div>
          <div className="icon2">
            <img src={Icon1} alt="" srcSet="" />
          </div>
          <div className="icon3" ref={this.myTitle}>
            <img src={Icon1} alt="" srcSet="" />
          </div>
        </div>
      </div>
    );
  }
}

export default AnimationLogin;
