import React, { Component } from "react";
import "./Search.css";
import searchIcon from "../../assets/images/search_icon.svg";

export default class Search extends Component {
  state = {
    inputText: "",
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter" && this.state.inputText !== "") {
      this.props.parentCallBack(true);
    }
  };

  handleOnChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>What are you looking for</h1>
        <div>
          <input
            type="search"
            onKeyPress={(event) => this.handleKeyPress(event)}
            onChange={(event) => this.handleOnChange(event)}
          />
          <img src={searchIcon} alt="" id="searchIcon" />
        </div>
      </>
    );
  }
}
