import React, { Component } from "react";
import "./Twitter.css";
import Search from "../Search/Search.jsx";
import DisplayResults from "../DisplayResults/DisplayResults";
export default class Twitter extends Component {
  render() {
    return (
      <div class="tabBg">
        <Search></Search>
        <DisplayResults></DisplayResults>
      </div>
    );
  }
}
