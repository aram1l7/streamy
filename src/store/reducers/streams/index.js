import { types } from "../../actions/types";
import _ from "lodash";
let initialState = {};

export const streamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STREAM_LIST:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case types.GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
