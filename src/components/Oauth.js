import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../store/actions";
class Oauth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.startSignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.startSignOut();
    }
  };
  handleSignInClick = () => {
    this.auth.signIn();
  };
  handleSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    }
    if (this.props.isSignedIn === false) {
      return (
        <button
          className="ui blue google button"
          onClick={this.handleSignInClick}
        >
          <i className="google icon" />
          Sign In
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={this.handleSignOutClick}
        >
          <i className="google icon" />
          Sign out
        </button>
      );
    }
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId:state.auth.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSignIn: (id) => dispatch(signIn(id)),
    startSignOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Oauth);
