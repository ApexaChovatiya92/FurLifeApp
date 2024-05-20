import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  REQUEST_OTP,
  VERIFY_OTP,
} from '../actions/authActions';

import { ApiEndpoints } from '../apiService/apiEndPoints'; // Adjust the path as needed
import { MicroService } from '../apiService/microService';


function* requestOtpSaga(action) {
  console.warn('Get OTP saga called');
  try {
    const { loginMethod, value } = action.payload;
    console.warn(`${MicroService.USER}/${ApiEndpoints.getOtp}`);
    const requestBody = {
      [loginMethod]: value,
      isSignup: true,
    };
    yield call(axios.post, `${MicroService.USER}/${ApiEndpoints.getOtp}`, requestBody);
    // navigate to VerifyOTP screen
  } catch (error) {
    // Handle error if needed
  }
}

function* verifyOtpSaga(action) {
  try {
    const { email, otp } = action.payload;
    yield call(axios.post, `${MicroService.USER}/${ApiEndpoints.verifyOtp}`, {
        email,
        otp,
      });
    // navigate back
  } catch (error) {
  }
}

function* authSaga() {
  yield takeLatest(REQUEST_OTP, requestOtpSaga);
  yield takeLatest(VERIFY_OTP, verifyOtpSaga);
}

export default authSaga;
