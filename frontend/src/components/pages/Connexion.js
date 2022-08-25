import React, { Component } from "react";
import Logo from "../../images/logo.png";
import AnimationLogin from "../animationLogin";
import Signin from "../Signin";

export class Connexion extends Component {
  render() {
    return (
      <div className="inscription">
        <div className="containerInscription">
          <div className="headerInscription" style={{ paddingTop: "20px" }}>
            <div className="logo">
              <img src={Logo} alt="" srcset="" width="70" height="70" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Signin />
            <AnimationLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default Connexion;
