import React, { Component } from "react";
import Header from "./Header";
import Login from "./Login";

export class Inscription extends Component {
  render() {
    return (
      <div className="inscription">
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Login />
        </div>
      </div>
    );
  }
}

export default Inscription;
