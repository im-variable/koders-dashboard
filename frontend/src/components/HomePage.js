import React, { Component } from "react";
import ViewPage from "./ImageCard";
import UploadPage from "./UploadPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UploadPage}></Route>
          <Route path="/view" component={ViewPage}></Route>
        </Switch>
      </Router>
    );
  }
}
