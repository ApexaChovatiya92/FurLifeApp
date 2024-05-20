import { combineReducers } from "redux";
import authReducer from './authReducer'; // Import the authReducer

const rootReducer = combineReducers({
  auth: authReducer, // Correct key used here
});

export default rootReducer;