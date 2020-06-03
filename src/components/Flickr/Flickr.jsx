import React, { Component } from "react";
import Search from "../Search/Search";
import DisplayResults from "../DisplayResults/DisplayResults";
import axios from "axios";

export default class Flickr extends Component {
  state = {
    activeSearch: false,
    inputText: "",
    photoArray: [],
  };

  // If the user searched for something, we update the state
  setActiveSearch = (activeSearch) => {
    this.setState({ activeSearch });
  };

  // After he presses enter, we receive the input and call the function
  setInputText = (inputText) => {
    this.setState({ inputText }, () => this.getDataFromFlickr());
  };

  // Using axios we get the data from the Flickr API
  getDataFromFlickr = () => {
    const { inputText } = this.state;
    const apiKey = "eef643f32cb572dbb2e95e72d708a545";
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${inputText}&safe_search=2&format=json&nojsoncallback=1`;
    axios
      .get(url)
      .then((result) => {
        const photo = result.data;
        const photos = photo.photos;
        const photoArray = photos.photo;
        this.setState({ photoArray });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { photoArray } = this.state;
    return (
      <div className="tabBg">
        <Search
          getSearchState={this.setActiveSearch}
          getInputText={this.setInputText}
        />
        <DisplayResults
          active={this.state.activeSearch}
          photos={photoArray}
          source={"Flickr"}
        />
      </div>
    );
  }
}
