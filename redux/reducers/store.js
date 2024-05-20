import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga'; // Adjust the path as necessary

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
// Attach the saga middleware's `run` method to the store
store.runSaga = sagaMiddleware.run;

// Run the root saga
store.runSaga(rootSaga);
export default store;
