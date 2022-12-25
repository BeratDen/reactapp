import React, { Component } from "react";
import Header from "../Header";

export default class Login extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header></Header>

        <form
          style={{ display: "flex", flexDirection: "column", padding: "40px" }}
        >
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
        </form>
      </div>
    );
  }
}
