import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
    };
    console.log("Constractor");
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    // Api istekleri
    this.setState({
      a: 20,
    });
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("Component Did Updatde");
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Updated");
    return true;
  }
  render() {
    console.log("Render");

    return <div>{this.state.a}</div>;
  }
}
