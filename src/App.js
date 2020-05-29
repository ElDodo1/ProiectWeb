import React, { Component } from "react";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainContent />
      </div>
    );
  }
}
