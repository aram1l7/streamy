import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { reducer as formReducer } from "redux-form";
import { streamReducer } from "./streams";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams:streamReducer
});
