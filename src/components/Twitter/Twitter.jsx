import React, { Component } from "react";
import "./Twitter.css";
import Search from "../Search/Search.jsx";
import DisplayResults from "../DisplayResults/DisplayResults";
export default class Twitter extends Component {
  state = {
    activeSearch: false,
  };

  setActiveSearch = (activeSearch) => {
    this.setState({ activeSearch });
  };

  render() {
    return (
      <div class="tabBg">
        <Search getSearchState={this.setActiveSearch} />
        <DisplayResults active={this.state.activeSearch} />
      </div>
    );
  }
}
