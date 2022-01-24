import React, { useEffect } from "react";
import { getStream, editStream } from "../../store/operations";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StreamForm from "./StreamForm";
import _ from "lodash";
const StreamEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);
  useEffect(() => {
    dispatch(getStream(id));
  }, []);
  const handleSubmit = (formValues) => {
    dispatch(editStream(id, formValues));
  };
  return (
    <div>
      {stream ? (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm
            initialValues={_.pick(stream, "title", "description")}
            onSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div>Loading.... </div>
      )}
    </div>
  );
};

export default StreamEdit;
