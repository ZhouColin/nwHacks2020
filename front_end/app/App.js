import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from 'routes/index';
import store from 'store/index';
import {Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
