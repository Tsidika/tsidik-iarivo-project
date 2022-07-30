import React, { Component } from "react";
import "./myCss.css";
import Logo from "../images/logo.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="" srcset="" width="90" height="90" />
          </div>
          <div className="title">
            <h2> Tsidik'Iarivo </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
