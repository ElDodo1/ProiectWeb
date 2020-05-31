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

  getDataFromTwitter = async () => {
    const { inputText } = this.state;
    const tweets = await fetch(
      `http://localhost:5000/tweets/?searchTerm=${inputText}`
    ).then((response) => response.json());
    this.setState({
      tweets: tweets.data.statuses,
    });
  };

  setActiveSearch = (activeSearch) => {
    this.setState({ activeSearch });
  };

  setInputText = (inputText) => {
    this.setState({ inputText });
    setTimeout(() => {
      return this.getDataFromTwitter(), 1000;
    });
  };

  render() {
    return (
      <div class="tabBg">
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
