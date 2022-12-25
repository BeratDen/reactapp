import React, { Component } from "react";
import AddUser from "./AddUser";
import Users from "./Users";
import Header from "../Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container mt-5">
          <h1>Merhaba React</h1>
          <AddUser></AddUser>
          <hr />
          <Users></Users>
        </div>
      </div>
    );
  }
}
