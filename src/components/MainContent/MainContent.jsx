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
export default class MainContent extends Component {
  render() {
    return (
      <div className="mainBg">
        <Router>
          <Link to="/flickr" className="tab">
            Flickr
          </Link>
          <Link to="/twitter" className="tab">
            Twitter
          </Link>
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
