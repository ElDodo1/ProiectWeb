import React, { Component } from "react";
import inactive from "../../assets/images/inactive.png";
import "./DisplayResults.css";
export default class DisplayResults extends Component {
  render() {
    return !this.props.active ? (
      <img src={inactive} alt="ceva" />
    ) : (
      <ul id="gridContainer">hai norok</ul>
    );
  }
}
