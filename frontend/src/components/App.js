import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import PermanentDrawerLeft from "./PermanentDrawerLeft";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return <div>{/* <HomePage /> */}</div>;
    return (
      <div>
        <PermanentDrawerLeft />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
