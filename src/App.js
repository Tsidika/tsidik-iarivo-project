import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscription from "./components/pages/Inscription";

// import Client from "./components/Client";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
