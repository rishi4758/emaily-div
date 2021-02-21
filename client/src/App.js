import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header.js";
import landing from "./components/landing.js";
import SurveyNew from "./components/surveys/surveynew";
import { connect } from "react-redux";
import * as actions from "./actions";
import Dashboard from "./components/dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/surveys/new" component={SurveyNew}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
