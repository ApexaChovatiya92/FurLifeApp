import { all } from 'redux-saga/effects';
import authSaga from './authSaga'; // Adjust the path as necessary

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}