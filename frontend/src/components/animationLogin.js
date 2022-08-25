import React, { Component } from "react";
import "./containerAnimation.css";
import image from "../images/login1.png";
import Icon1 from "../images/1.png";
import Icon2 from "../images/Reserver.png";
import Icon3 from "../images/surPlace.png";
import Icon4 from "../images/informer.png";

class AnimationLogin extends Component {
  constructor(props) {
    super(props);
    this.myTitle1 = React.createRef();
    this.myTitle2 = React.createRef();
    this.myTitle3 = React.createRef();
    console.log(this.myTitle);
  }

  animationtion = (Icon2, params, t1, t2, t3) => {
    setInterval(() => {
      setTimeout(() => {
        params.current.src = Icon2;
        params.current.style.transition = `${t1}s`;
      }, t2);
      params.current.src = Icon1;
    }, t3);
  };

  componentDidMount = () => {
    // this.myTitle.current.style.backgroundImage = `url("${Icon2}")`;
  };
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
            {this.animationtion(Icon2, this.myTitle1, 0.7, 2000, 6000)}
            <img src={Icon1} alt="" srcSet="" ref={this.myTitle1} />
          </div>
          <div className="icon2">
            {this.animationtion(Icon3, this.myTitle2, 0.6, 4000, 5000)}
            <img src={Icon1} alt="" srcSet="" ref={this.myTitle2} />
          </div>
          <div className="icon3">
            {this.animationtion(Icon4, this.myTitle3, 0.3, 5000, 6000)}
            <img src={Icon1} alt="" srcSet="" ref={this.myTitle3} />
          </div>
        </div>
      </div>
    );
  }
}

export default AnimationLogin;
