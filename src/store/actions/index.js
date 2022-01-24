import { types } from "./types";
export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const createStreamSuccess = (streams) => {
  return {
    type: types.CREATE_STREAM,
    payload: streams,
  };
};

export const getStreamListSuccess = (streams) => {
  return {
    type: types.GET_STREAM_LIST,
    payload: streams,
  };
};

export const getStreamSuccess = (stream) => {
  return {
    type: types.GET_STREAM,
    payload: stream,
  };
};

export const editStreamSuccess = (stream) => {
  return {
    type: types.EDIT_STREAM,
    payload: stream,
  };
};

export const deleteStreamSuccess = (id) => {
  return {
    type: types.DELETE_STREAM,
    payload: id,
  };
};

