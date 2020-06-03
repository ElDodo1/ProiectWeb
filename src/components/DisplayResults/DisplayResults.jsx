import React, { Component } from "react";
import inactive from "../../assets/images/inactive.png";
import "./DisplayResults.css";
import "../../App.css";
import Tweet from "../Tweet/Tweet";

export default class DisplayResults extends Component {
  // We display and format the data we receive, based on it's source from the props
  renderBySource = () => {
    const { source, tweets } = this.props;
    if (source === "Flickr") {
      return this.props.photos.map((photo, index) => {
        let farm_id = photo.farm;
        let server_id = photo.server;
        let id = photo.id;
        let secret = photo.secret;
        let photoUrl = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_c.jpg`;
        return (
          <li key={`p-${index}`}>
            <img
              src={`${photoUrl}`}
              key={`p-${index}`}
              alt={`This is -${index}`}
            />
          </li>
        );
      });
    } else {
      return tweets.map((tweet, index) => {
        const tweetData = {
          userPhoto: tweet.user.profile_image_url_https,
          userName: tweet.user.name,
          isVerified: tweet.user.verified,
          screenName: tweet.user.screen_name,
          date: tweet.created_at,
          text: tweet.text,
          favoriteCount: tweet.favorite_count,
          retweetCount: tweet.retweet_count,
        };

        return <Tweet tweetData={tweetData} key={`p-${index}`} />;
      });
    }
  };

  // Based on the data source, we display the right container for it
  sourceContainer = () => {
    const { source } = this.props;
    let idContainerName = "";
    if (source === "Flickr") {
      idContainerName = "flickr-grid-container";
    } else {
      idContainerName = "twitter-grid-container";
    }

    return idContainerName;
  };

  render() {
    const { active } = this.props;
    // An image illustration is displayed before the user searches for something
    return !active ? (
      <img src={inactive} alt="start searching" className="inactiveImg" />
    ) : (
      // If the user searched for something, we call these methods to show him the right container for the received data
      <ul id={this.sourceContainer()}>{this.renderBySource()}</ul>
    );
  }
}
