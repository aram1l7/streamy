import { types } from "../../actions/types";

let initialState = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    case types.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};
