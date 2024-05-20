export const REQUEST_OTP = 'REQUEST_OTP';
export const VERIFY_OTP = 'VERIFY_OTP';

export const requestOtp = (loginMethod, value) => ({
  type: REQUEST_OTP,
  payload: { loginMethod, value },
});

export const verifyOtp = (email, otp) => ({
  type: VERIFY_OTP,
  payload: { email, otp },
});

