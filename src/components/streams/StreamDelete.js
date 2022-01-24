import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import history from "../../history";
import { deleteStream, getStream } from "../../store/operations";
import Modal from "../modules/modal/Modal";

function StreamDelete() {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStream(id));
  }, []);
  const actions = (
    <div>
      <button
        className="ui button negative"
        onClick={() => {
          dispatch(deleteStream(id));
        }}
      >
        Delete
      </button>
      <button
        className="ui button"
        onClick={() => {
          history.back();
        }}
      >
        Cancel
      </button>
    </div>
  );
  return (
    <div>
      <Modal
        actions={actions}
        headerText="Delete stream"
        content={`Are you sure to delete stream named ${stream?.title}?`}
        onDismiss={() => history.back()}
      />
    </div>
  );
}

export default StreamDelete;
