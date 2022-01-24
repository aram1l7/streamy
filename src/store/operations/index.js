import {
  createStreamSuccess,
  deleteStreamSuccess,
  editStreamSuccess,
  getStreamListSuccess,
  getStreamSuccess,
} from "../actions";
import client from "../../api/streams";
import { toast } from "react-toastify";
import history from "../../history";

export const getStreamList = () => async (dispatch) => {
  await client
    .get("/streams")
    .then((response) => dispatch(getStreamListSuccess(response.data)))
    .catch(() => toast.error("Sorry, something went wrong"));
};

export const createStream = (data) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  await client
    .post("/streams", { ...data, userId })
    .then((response) => {
      dispatch(createStreamSuccess(response.data));
      history.back();
      toast.success("Stream created successfully");
    })
    .catch(() => toast.error("Sorry, something went wrong"));
};

export const getStream = (id) => async (dispatch) => {
  await client
    .get(`/streams/${id}`)
    .then((response) => dispatch(getStreamSuccess(response.data)))
    .catch(() => toast.error("Sorry, something went wrong"));
};

export const editStream = (id, formValues) => async (dispatch) => {
  await client
    .patch(`/streams/${id}`, formValues)
    .then((response) => {
      dispatch(editStreamSuccess(response.data));
      history.back();
      toast.success("Stream edited successfully");
    })
    .catch(() => toast.error("Sorry, something went wrong"));
};

export const deleteStream = (id) => async (dispatch) => {
  await client
    .delete(`/streams/${id}`)
    .then(() => {
      dispatch(deleteStreamSuccess(id))
      history.back();
      toast.success("Stream deleted successfully");
    })
    .catch(() => toast.error("Sorry, something went wrong"));
};
