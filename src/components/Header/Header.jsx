import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import "../../App.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo} alt="" id="logo" />
        <span id="slogan">Let's pick it and tweet it</span>
      </div>
    );
  }
}
