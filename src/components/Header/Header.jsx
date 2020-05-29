import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo} alt="" id="logo" />
        <span id="slogan">Find your perfect photo</span>
      </div>
    );
  }
}
