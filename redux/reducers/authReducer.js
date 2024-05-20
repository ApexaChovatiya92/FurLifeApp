import {
    REQUEST_OTP,
    VERIFY_OTP,
  } 
from '../actions/authActions';
  
  const initialState = {
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_OTP:
        return { ...state, loading: true, error: null };
      case VERIFY_OTP:
        return { ...state, loading: true, error: null };
      default:
        return state;
    }
  };
  
  export default authReducer;