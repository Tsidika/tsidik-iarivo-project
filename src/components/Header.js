import React, { Component } from "react";
import "./myCss.css";
import Logo from "../images/logo.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="" srcset="" width="70" height="70" />
          </div>
          <div className="title">
            <h2> Tsidik'Iarivo </h2>
          </div>
          <div className="btnHeader">
            <div style={{ paddingRight: "15px" }}>
              <button>S'inscrire</button>
            </div>
            <div>
              <button>Se Connecter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
