import React, { Component } from "react";
import Header from "../Header";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Header />
        <form
          style={{ display: "flex", flexDirection: "column", padding: "40px" }}
        >
          <input type="name" placeholder="Name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
        </form>
      </div>
    );
  }
}
