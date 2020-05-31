import React, { Component } from "react";
import "./Search.css";
import "../../App.css";
import searchIcon from "../../assets/images/search_icon.svg";

export default class Search extends Component {
  state = {
    inputText: "",
  };

  handleKeyPress = (event) => {
    const { inputText } = this.state;
    if (event.key === "Enter" && inputText !== "") {
      this.props.getSearchState(true);
      this.props.getInputText(inputText);
    } else {
      if (inputText === "") {
        this.props.getSearchState(false);
      }
    }
  };

  handleOnChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {
    return (
      <div className="search-container">
        <h1>What are you looking for?</h1>
        <div className="search-bar">
          <img src={searchIcon} alt="" id="searchIcon" />
          <input
            type="search"
            placeholder="eg. nature"
            onKeyPress={(event) => this.handleKeyPress(event)}
            onChange={(event) => this.handleOnChange(event)}
          />
        </div>
      </div>
    );
  }
}
