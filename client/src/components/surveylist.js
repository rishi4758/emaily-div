import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchsurvey } from "../actions";
class surveyList extends Component {
  componentDidMount() {
    this.props.fetchsurvey();
  }

  renderlist = () => {
    const ar = Object.values(this.props.survey);
    console.log(this.props.survey + "survey list");
    return ar.map((survey) => {
      return (
        <div class="card blue-grey darken-1" key={survey._id}>
          <div class="card-content white-text">
            <span class="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div class="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderlist()}</div>;
  }
}
function mapStateToProps({ survey }) {
  return { survey };
}
export default connect(mapStateToProps, { fetchsurvey })(surveyList);
