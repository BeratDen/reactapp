import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
