import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/Home";
// import Inscription from "./components/Inscription";

// import Client from "./components/Client";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Inscription /> */}
        <Home />
      </div>
    );
  }
}

export default App;
