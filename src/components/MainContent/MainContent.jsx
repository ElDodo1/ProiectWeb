import React, { Component } from "react";
import Twitter from "../Twitter/Twitter";
import Flickr from "../Flickr/Flickr";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./MainContent.css";
import "../../App.css";

export default class MainContent extends Component {
  state = {
    isClickedFlickr: true,
    isClickedTwitter: false,
  };

  // Based on what the user clicks we select the active tab
  changeOnClick = (currentTab) => {
    if (currentTab === "Flickr") {
      this.setState({
        isClickedFlickr: true,
        isClickedTwitter: false,
      });
    } else {
      this.setState({
        isClickedFlickr: false,
        isClickedTwitter: true,
      });
    }
  };

  render() {
    const { isClickedFlickr, isClickedTwitter } = this.state;
    return (
      <div className="mainBg">
        <Router>
          <div className="router">
            <Link
              to="/flickr"
              className={`${isClickedFlickr ? "tabActive" : "tabInactive"}`}
              onClick={() => this.changeOnClick("Flickr")}
            >
              Flickr
            </Link>
            <Link
              to="/twitter"
              className={`${isClickedTwitter ? "tabActive" : "tabInactive"}`}
              onClick={() => this.changeOnClick("Twitter")}
            >
              Twitter
            </Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/flickr"></Redirect>
            </Route>
            <Route path="/flickr" component={Flickr}></Route>
            <Route path="/twitter" component={Twitter}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
