import React, { Component } from "react";
import { getStreamList } from "../../store/operations";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class StreamList extends Component {

  componentDidMount() {
    this.props.getStreams();
  }

  render() {
    return (
      <>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.props.streams.map((el) => {
            return (
              <div className="item" key={el.id}>
                {el.userId === this.props.currentUserId && (
                  <div className="right floated content">
                    <Link
                      to={`/streams/edit/${el.id}`}
                      className="ui button primary"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/streams/delete/${el.id}`}
                      className="ui button negative"
                    >
                      Delete
                    </Link>
                  </div>
                )}
                <i className="large middle aligned icon camera"></i>
                <div className="content">
                  {el.title}
                  <div className="description">{el.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        {this.props.isSignedIn && (
          <>
            <div style={{ textAlign: "right" }}>
              <Link to="/streams/new" className="ui button primary">
                Create new
              </Link>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getStreams: () => dispatch(getStreamList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
