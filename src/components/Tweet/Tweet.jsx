import React, { Component } from "react";
import "./Tweet.css";
import approved from "../../assets/images/approved.png";
import heart from "../../assets/images/heart.svg";
import retweet from "../../assets/images/retweet.svg";
export default class Tweet extends Component {
  verifiedAccount = (isVerified) => {
    if (isVerified) return <img src={approved} alt="" id="isVerified" />;
  };
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
            <span id="userName">{userName}</span>
            {this.verifiedAccount(isVerified)}
            <span id="screenName">@{screenName}</span>
            <span id="date">{this.createdPostData(date)}</span>
            <span id="tweet-text">{text}</span>
            <span id="favorite-count">
              {favoriteCount}
              <img src={heart} alt="" />
            </span>
            <span id="retweet-count">
              <img src={retweet} alt="" />
              {retweetCount}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
