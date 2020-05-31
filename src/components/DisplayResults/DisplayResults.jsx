import React, { Component } from "react";
import inactive from "../../assets/images/inactive.png";
import "./DisplayResults.css";
import "../../App.css"
export default class DisplayResults extends Component {
  render() {
    return !this.props.active ? (
      <img src={inactive} alt="start searching" className="inactiveImg" />
    ) : (
      <ul id="gridContainer">
        {this.props.photos.map((photo, index) => {
          let farm_id = photo.farm;
          let server_id = photo.server;
          let id = photo.id;
          let secret = photo.secret;
          let photoUrl = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_c.jpg`;
          return <li><img src={`${photoUrl}`} key={`p-${index}`} /></li>;
        })}
      </ul>
    );
  }
}
