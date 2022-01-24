import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
class StreamForm extends Component {
  
  renderInput({ input, label, meta }) {
    const isError = meta.touched && meta.error;
    return (
      <div className={`field ${isError ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} />
        {isError && (
          <div className="ui error message">
            <div className="header">{meta.error}</div>
          </div>
        )}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    console.log(this.props.streams);
    return (
      <>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            label="Enter title"
            name="title"
            component={this.renderInput}
          />
          <Field
            label="Enter description"
            name="description"
            component={this.renderInput}
          />
          <button className="ui button primary">Submit</button>
        </form>
      </>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
