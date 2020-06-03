import React, { Component } from "react";
import "./Tweet.css";
import approved from "../../assets/images/approved.png";
import heart from "../../assets/icons/heart.svg";
import retweet from "../../assets/icons/retweet.svg";
export default class Tweet extends Component {
  // We check the isVerified so that we can display a special icon for it
  verifiedAccount = (isVerified) => {
    if (isVerified) return <img src={approved} alt="" id="is-verified" />;
  };

  // We format the date we receive so that it can be shown in a friendly way
  createdPostData = (date) => {
    let dateArray = date.split(" ");
    let newArray = [
      ...dateArray.slice(2, 3),
      ...dateArray.slice(1, 2),
      ...dateArray.splice(5, 5),
    ];

    return newArray.join(" ");
  };

  render() {
    // We used destructuring assignement so it's easier to type
    let {
      userPhoto,
      userName,
      isVerified,
      screenName,
      date,
      text,
      favoriteCount,
      retweetCount,
    } = this.props.tweetData;
    return (
      <div id="tweet-container">
        <img src={`${userPhoto}`} alt="userPhoto" />
        <div id="tweet-box">
          <div id="tweet-header">
            <span id="user-name">{userName}</span>
            {this.verifiedAccount(isVerified)}
            <span id="screen-name">@{screenName}</span>
            <span id="date">{this.createdPostData(date)}</span>
          </div>
          <span id="tweet-text">{text}</span>
          <div id="numbers">
            <span id="favorite-count">
              {favoriteCount}
              <img src={heart} alt="likes" />
            </span>
            <span id="retweet-count">
              <img src={retweet} alt="shares" />
              {retweetCount}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
