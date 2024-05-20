/**
 * @format
 */
// index.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/reducers/store';
import rootSaga from './redux/reducers/rootSaga'; // Your root saga

// Start the root saga
store.runSaga(rootSaga);
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
