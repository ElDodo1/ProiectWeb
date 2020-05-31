import React, { Component } from "react";
import "./Flickr.css";
import "../../App.css";
import Search from "../Search/Search";
import DisplayResults from "../DisplayResults/DisplayResults";
import axios from "axios";

export default class Flickr extends Component {
  state = {
    activeSearch: false,
    inputText: "",
    photoArray: [],
  };

  setActiveSearch = (activeSearch) => {
    this.setState({ activeSearch });
  };

  setInputText = (inputText) => {
    this.setState({ inputText }, () => this.getDataFromFlickr());
  };

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
