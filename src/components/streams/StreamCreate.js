import React, { Component } from "react";
import StreamForm from "./StreamForm";
import { createStream } from "../../store/operations";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
class StreamCreate extends Component {

  onSubmit = (formValues) => {
    this.props.submitForm(formValues);
  };
  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams.streams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(createStream(data)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(StreamCreate);

