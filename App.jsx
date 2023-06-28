import React from 'react';
import {View, Text} from 'react-native';
import Main from './src/screens/Main';

import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
