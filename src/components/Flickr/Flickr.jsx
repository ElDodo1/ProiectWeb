import React, { Component } from "react";
import "./Flickr.css";
import "../../App.css";
import Search from "../Search/Search";
import DisplayResults from "../DisplayResults/DisplayResults";

export default class Flickr extends Component {
  state = {
    active: false,
  };

  setActive = (active) => {
    this.setState({ active });
  };

  render() {
    return (
      <div className="tabBg">
        <Search parentCallBack={this.setActive} />
        <DisplayResults active={this.state.active} />
      </div>
    );
  }
}
