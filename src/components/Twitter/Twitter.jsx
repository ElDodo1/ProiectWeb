import React, { Component } from "react";
import "./Twitter.css";
import Search from "../Search/Search.jsx";
import DisplayResults from "../DisplayResults/DisplayResults";
export default class Twitter extends Component {
  state = {
    activeSearch: false,
    inputText: "",
    tweets: [],
  };

  // We make a call to the server so that i can request data for us
  getDataFromTwitter = async () => {
    const { inputText } = this.state;
    const tweets = await fetch(
      `http://localhost:5000/tweets/?searchTerm=${inputText}`
    ).then((response) => response.json());
    this.setState({
      tweets: tweets.data.statuses,
    });
  };
  // If the user searched for something, we update the state
  setActiveSearch = (activeSearch) => {
    this.setState({ activeSearch });
  };
  // After he presses enter, we receive the input and call the function
  setInputText = (inputText) => {
    this.setState({ inputText }, () => this.getDataFromTwitter());
  };

  render() {
    return (
      <div className="tabBg">
        <Search
          getSearchState={this.setActiveSearch}
          getInputText={this.setInputText}
        />
        <DisplayResults
          active={this.state.activeSearch}
          source={"Twitter"}
          tweets={this.state.tweets}
        />
      </div>
    );
  }
}
